import './style.css'

type Dot = {
  originX: number
  originY: number
  x: number
  y: number
  vx: number
  vy: number
}

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('App root not found')
}

const canvas = document.createElement('canvas')
const maybeContext = canvas.getContext('2d')

if (!maybeContext) {
  throw new Error('2D context is not available')
}

const context = maybeContext

app.replaceChildren(canvas)

const dotSpacing = 24
const dotRadius = 2
const fieldCellSize = 18
const dropRadius = 180
const dropStrength = 16
const dragDropRadius = 110
const dragDropStrength = 2.4
const dragMinDistance = 12
const rippleForce = 36000
const springStrength = 20
const motionDamping = 11
const fixedTimeStep = 1 / 60
const maxFrameDelta = 1 / 20
const maxSubsteps = 3

let viewportWidth = 0
let viewportHeight = 0
let dots: Dot[] = []
let rippleField: RippleField
let previousTime = 0
let accumulatedTime = 0
let isPointerDown = false
let activePointerId: number | null = null
let lastDragX = 0
let lastDragY = 0

class RippleField {
  private width: number
  private height: number
  private readonly cellSize: number
  private columns = 0
  private rows = 0
  private heights = new Float32Array()
  private velocities = new Float32Array()
  private nextHeights = new Float32Array()
  private nextVelocities = new Float32Array()

  constructor(width: number, height: number, cellSize: number) {
    this.cellSize = cellSize
    this.width = width
    this.height = height
    this.resize(width, height)
  }

  resize(width: number, height: number) {
    this.width = width
    this.height = height
    this.columns = Math.max(2, Math.ceil(width / this.cellSize) + 1)
    this.rows = Math.max(2, Math.ceil(height / this.cellSize) + 1)

    const size = this.columns * this.rows
    this.heights = new Float32Array(size)
    this.velocities = new Float32Array(size)
    this.nextHeights = new Float32Array(size)
    this.nextVelocities = new Float32Array(size)
  }

  disturb(x: number, y: number, radius: number, strength: number) {
    const minColumn = Math.max(0, Math.floor((x - radius) / this.cellSize))
    const maxColumn = Math.min(this.columns - 1, Math.ceil((x + radius) / this.cellSize))
    const minRow = Math.max(0, Math.floor((y - radius) / this.cellSize))
    const maxRow = Math.min(this.rows - 1, Math.ceil((y + radius) / this.cellSize))

    for (let row = minRow; row <= maxRow; row += 1) {
      for (let column = minColumn; column <= maxColumn; column += 1) {
        const sampleX = column * this.cellSize
        const sampleY = row * this.cellSize
        const distance = Math.hypot(sampleX - x, sampleY - y)

        if (distance > radius) {
          continue
        }

        const normalizedDistance = 1 - distance / radius
        const drop = 0.5 - Math.cos(normalizedDistance * Math.PI) * 0.5
        this.heights[this.index(column, row)] += drop * strength
      }
    }
  }

  step() {
    for (let row = 0; row < this.rows; row += 1) {
      for (let column = 0; column < this.columns; column += 1) {
        const index = this.index(column, row)
        const height = this.heights[index]
        const average = (
          this.heightAt(column - 1, row) +
          this.heightAt(column + 1, row) +
          this.heightAt(column, row - 1) +
          this.heightAt(column, row + 1)
        ) * 0.25

        let velocity = this.velocities[index]
        velocity += (average - height) * 2
        velocity *= 0.995

        this.nextVelocities[index] = velocity
        this.nextHeights[index] = height + velocity
      }
    }

    ;[this.heights, this.nextHeights] = [this.nextHeights, this.heights]
    ;[this.velocities, this.nextVelocities] = [this.nextVelocities, this.velocities]
  }

  gradientAt(x: number, y: number) {
    const epsilon = this.cellSize
    const left = this.sampleHeight(x - epsilon, y)
    const right = this.sampleHeight(x + epsilon, y)
    const top = this.sampleHeight(x, y - epsilon)
    const bottom = this.sampleHeight(x, y + epsilon)

    return {
      x: (right - left) / (epsilon * 2),
      y: (bottom - top) / (epsilon * 2),
    }
  }

  private sampleHeight(x: number, y: number) {
    const clampedX = clamp(x, 0, this.width)
    const clampedY = clamp(y, 0, this.height)
    const gridX = clampedX / this.cellSize
    const gridY = clampedY / this.cellSize
    const x0 = Math.floor(gridX)
    const y0 = Math.floor(gridY)
    const x1 = Math.min(this.columns - 1, x0 + 1)
    const y1 = Math.min(this.rows - 1, y0 + 1)
    const tx = gridX - x0
    const ty = gridY - y0
    const h00 = this.heights[this.index(x0, y0)]
    const h10 = this.heights[this.index(x1, y0)]
    const h01 = this.heights[this.index(x0, y1)]
    const h11 = this.heights[this.index(x1, y1)]
    const top = lerp(h00, h10, tx)
    const bottom = lerp(h01, h11, tx)

    return lerp(top, bottom, ty)
  }

  private heightAt(column: number, row: number) {
    const clampedColumn = clamp(Math.round(column), 0, this.columns - 1)
    const clampedRow = clamp(Math.round(row), 0, this.rows - 1)

    return this.heights[this.index(clampedColumn, clampedRow)]
  }

  private index(column: number, row: number) {
    return row * this.columns + column
  }
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

rippleField = new RippleField(1, 1, fieldCellSize)

function createDots(width: number, height: number) {
  const nextDots: Dot[] = []
  const offsetX = (width % dotSpacing) * 0.5
  const offsetY = (height % dotSpacing) * 0.5

  for (let y = offsetY; y <= height; y += dotSpacing) {
    for (let x = offsetX; x <= width; x += dotSpacing) {
      nextDots.push({
        originX: x,
        originY: y,
        x,
        y,
        vx: 0,
        vy: 0,
      })
    }
  }

  dots = nextDots
}

function resizeCanvas() {
  viewportWidth = window.innerWidth
  viewportHeight = window.innerHeight

  const dpr = window.devicePixelRatio || 1
  canvas.width = Math.round(viewportWidth * dpr)
  canvas.height = Math.round(viewportHeight * dpr)
  canvas.style.width = `${viewportWidth}px`
  canvas.style.height = `${viewportHeight}px`

  context.setTransform(dpr, 0, 0, dpr, 0, 0)

  rippleField.resize(viewportWidth, viewportHeight)
  createDots(viewportWidth, viewportHeight)
  draw()
}

function updateDots(dt: number) {
  for (const dot of dots) {
    const gradient = rippleField.gradientAt(dot.x, dot.y)
    const rippleFx = -gradient.x * rippleForce
    const rippleFy = -gradient.y * rippleForce
    const springFx = (dot.originX - dot.x) * springStrength
    const springFy = (dot.originY - dot.y) * springStrength
    const dampingFx = -dot.vx * motionDamping
    const dampingFy = -dot.vy * motionDamping

    const ax = rippleFx + springFx + dampingFx
    const ay = rippleFy + springFy + dampingFy

    dot.vx += ax * dt
    dot.vy += ay * dt
    dot.x += dot.vx * dt
    dot.y += dot.vy * dt
  }
}

function updateSimulation(dt: number) {
  accumulatedTime += Math.min(dt, maxFrameDelta)

  let steps = 0

  while (accumulatedTime >= fixedTimeStep && steps < maxSubsteps) {
    rippleField.step()
    updateDots(fixedTimeStep)
    accumulatedTime -= fixedTimeStep
    steps += 1
  }
}

function draw() {
  context.clearRect(0, 0, viewportWidth, viewportHeight)
  context.fillStyle = '#111'

  for (const dot of dots) {
    context.beginPath()
    context.arc(dot.x, dot.y, dotRadius, 0, Math.PI * 2)
    context.fill()
  }
}

function frame(time: number) {
  const dt = previousTime === 0 ? fixedTimeStep : (time - previousTime) / 1000
  previousTime = time

  updateSimulation(dt)
  draw()

  window.requestAnimationFrame(frame)
}

function addDragDisturbance(x: number, y: number) {
  const distance = Math.hypot(x - lastDragX, y - lastDragY)

  if (distance < dragMinDistance) {
    return
  }

  const steps = Math.max(1, Math.ceil(distance / dragMinDistance))

  for (let index = 1; index <= steps; index += 1) {
    const t = index / steps
    rippleField.disturb(
      lerp(lastDragX, x, t),
      lerp(lastDragY, y, t),
      dragDropRadius,
      dragDropStrength,
    )
  }

  lastDragX = x
  lastDragY = y
}

canvas.addEventListener('pointerdown', (event) => {
  isPointerDown = true
  activePointerId = event.pointerId
  lastDragX = event.clientX
  lastDragY = event.clientY
  canvas.setPointerCapture(event.pointerId)
  rippleField.disturb(event.clientX, event.clientY, dropRadius, dropStrength)
})

canvas.addEventListener('pointermove', (event) => {
  if (!isPointerDown || event.pointerId !== activePointerId) {
    return
  }

  addDragDisturbance(event.clientX, event.clientY)
})

function endPointerInteraction(event: PointerEvent) {
  if (event.pointerId !== activePointerId) {
    return
  }

  isPointerDown = false
  activePointerId = null

  if (canvas.hasPointerCapture(event.pointerId)) {
    canvas.releasePointerCapture(event.pointerId)
  }
}

canvas.addEventListener('pointerup', endPointerInteraction)
canvas.addEventListener('pointercancel', endPointerInteraction)

window.addEventListener('resize', resizeCanvas)

resizeCanvas()
window.requestAnimationFrame(frame)
