import { layoutWithLines, prepareWithSegments, type PreparedTextWithSegments } from '@chenglou/pretext'
import GUI from 'lil-gui'
import './style.css'

type RenderMode = 'dot' | 'text'

type ParticleBase = {
  originX: number
  originY: number
  x: number
  y: number
  vx: number
  vy: number
}

type DotParticle = ParticleBase & {
  kind: 'dot'
}

type WordParticle = ParticleBase & {
  kind: 'word'
  text: string
  width: number
  height: number
  element: HTMLSpanElement
  renderedX: number
  renderedY: number
  renderedTone: number
}

type Particle = DotParticle | WordParticle

type SimulationSettings = {
  mode: RenderMode
  dotSpacing: number
  dotRadius: number
  textCount: number
  textSize: number
  textSelectable: boolean
  fieldCellSize: number
  rippleSpeed: number
  dropRadius: number
  dropStrength: number
  dragDropRadius: number
  dragDropStrength: number
  dragMinDistance: number
  rippleForce: number
  springStrength: number
  motionDamping: number
  reset: () => void
}

const TEXT_SOURCE = `To be, or not to be, that is the question:
Whether 'tis nobler in the mind to suffer
The slings and arrows of outrageous fortune,
Or to take arms against a sea of troubles,
And by opposing end them. To die, to sleep,
No more, and by a sleep to say we end
The heart-ache and the thousand natural shocks
That flesh is heir to, 'tis a consummation
Devoutly to be wish'd. To die, to sleep,
To sleep, perchance to dream, ay, there's the rub,
For in that sleep of death what dreams may come,
When we have shuffled off this mortal coil,
Must give us pause.`
const TEXT_BLOCK_PADDING = 20
const TEXT_FONT_FAMILY = '"Helvetica Neue", Helvetica, Arial, sans-serif'
const TEXT_FONT_WEIGHT = 600
const TEXT_LINE_HEIGHT_RATIO = 1.32
const TEXT_WORDS = TEXT_SOURCE.trim().split(/\s+/)
const TEXT_IDLE_LIGHTNESS = 222
const TEXT_ACTIVE_LIGHTNESS = 28
const TEXT_SPEED_FOR_MAX_DARKNESS = 140
const TEXT_TONE_STEPS = 12
const TEXT_POSITION_EPSILON = 0.1
const PROJECT_URL = 'https://github.com/jeantimex/ripples'

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('App root not found')
}

const canvas = document.createElement('canvas')
const textLayer = document.createElement('div')
const footer = document.createElement('footer')
const footerLink = document.createElement('a')
const maybeContext = canvas.getContext('2d')

if (!maybeContext) {
  throw new Error('2D context is not available')
}

const context = maybeContext
textLayer.className = 'text-layer'
footer.className = 'footer-bar'
footerLink.className = 'footer-link'
footerLink.href = PROJECT_URL
footerLink.target = '_blank'
footerLink.rel = 'noreferrer'
footerLink.innerHTML = `
  <svg viewBox="0 0 24 24" aria-hidden="true" class="footer-link__icon">
    <path fill="currentColor" d="M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.53.1.72-.23.72-.52v-1.82c-2.95.64-3.57-1.25-3.57-1.25-.48-1.22-1.17-1.54-1.17-1.54-.96-.65.07-.64.07-.64 1.06.08 1.62 1.09 1.62 1.09.95 1.62 2.48 1.15 3.08.88.1-.68.37-1.15.67-1.42-2.35-.27-4.82-1.18-4.82-5.23 0-1.15.4-2.08 1.08-2.82-.1-.27-.47-1.37.1-2.85 0 0 .88-.28 2.9 1.08a9.95 9.95 0 0 1 5.28 0c2.01-1.36 2.89-1.08 2.89-1.08.58 1.48.22 2.58.11 2.85.68.74 1.08 1.67 1.08 2.82 0 4.06-2.48 4.95-4.84 5.21.38.33.72.97.72 1.96v2.9c0 .29.19.63.73.52A10.5 10.5 0 0 0 12 1.5Z"/>
  </svg>
  <span>jeantimex</span>
`
app.replaceChildren(canvas, textLayer, footer)
footer.append(footerLink)

const fixedTimeStep = 1 / 60
const maxFrameDelta = 1 / 20
const maxSubsteps = 3

const defaultSettings = {
  mode: 'text' as RenderMode,
  dotSpacing: 15,
  dotRadius: 3,
  textCount: 500,
  textSize: 13,
  textSelectable: true,
  fieldCellSize: 18,
  rippleSpeed: 0.3,
  dropRadius: 79,
  dropStrength: 5.4,
  dragDropRadius: 38,
  dragDropStrength: 1.1,
  dragMinDistance: 6,
  rippleForce: 36300,
  springStrength: 7,
  motionDamping: 11,
}

let viewportWidth = 0
let viewportHeight = 0
let particles: Particle[] = []
let rippleField: RippleField
let previousTime = 0
let accumulatedTime = 0
let isPointerDown = false
let activePointerId: number | null = null
let lastDragX = 0
let lastDragY = 0
let preparedText: PreparedTextWithSegments | null = null
let preparedTextKey = ''

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
        velocity += (average - height) * settings.rippleSpeed
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

function inverseLerp(min: number, max: number, value: number) {
  if (max === min) {
    return 0
  }

  return (value - min) / (max - min)
}

function isWordParticle(particle: Particle): particle is WordParticle {
  return particle.kind === 'word'
}

function getTextFont() {
  return `${TEXT_FONT_WEIGHT} ${settings.textSize}px ${TEXT_FONT_FAMILY}`
}

function getTextLineHeight() {
  return Math.round(settings.textSize * TEXT_LINE_HEIGHT_RATIO)
}

function syncTextLayerTypography() {
  textLayer.style.fontFamily = TEXT_FONT_FAMILY
  textLayer.style.fontWeight = String(TEXT_FONT_WEIGHT)
  textLayer.style.fontSize = `${settings.textSize}px`
  textLayer.style.lineHeight = `${getTextLineHeight()}px`
}

function getTextSample() {
  const count = Math.max(1, Math.round(settings.textCount))
  const words = Array.from({ length: count }, (_, index) => TEXT_WORDS[index % TEXT_WORDS.length]!)
  return words.join(' ')
}

function getPreparedText() {
  const text = getTextSample()
  const font = getTextFont()
  const key = `${text}\n${font}`

  if (preparedText === null || preparedTextKey !== key) {
    preparedText = prepareWithSegments(text, font)
    preparedTextKey = key
  }

  return preparedText
}

function setGuiSectionVisible(section: GUI, visible: boolean) {
  section.domElement.style.display = visible ? '' : 'none'
}

function clearTextLayer() {
  textLayer.replaceChildren()
}

function updateTextLayerVisibility() {
  textLayer.style.display = settings.mode === 'text' ? 'block' : 'none'
  textLayer.style.pointerEvents = settings.mode === 'text' ? 'auto' : 'none'
  textLayer.style.userSelect = settings.textSelectable ? 'text' : 'none'
  textLayer.style.webkitUserSelect = settings.textSelectable ? 'text' : 'none'
  canvas.style.pointerEvents = settings.mode === 'text' ? 'none' : 'auto'

  for (const particle of particles) {
    if (!isWordParticle(particle)) {
      continue
    }

    particle.element.style.userSelect = settings.textSelectable ? 'text' : 'none'
    particle.element.style.webkitUserSelect = settings.textSelectable ? 'text' : 'none'
  }
}

function getParticleLightness(particle: Particle) {
  const speed = Math.hypot(particle.vx, particle.vy)
  const darkness = clamp(inverseLerp(0, TEXT_SPEED_FOR_MAX_DARKNESS, speed), 0, 1)

  return Math.round(lerp(TEXT_IDLE_LIGHTNESS, TEXT_ACTIVE_LIGHTNESS, darkness))
}

function getQuantizedLightness(particle: Particle) {
  const lightness = getParticleLightness(particle)
  const normalized = inverseLerp(TEXT_ACTIVE_LIGHTNESS, TEXT_IDLE_LIGHTNESS, lightness)
  const step = Math.round(clamp(normalized, 0, 1) * (TEXT_TONE_STEPS - 1))
  const quantized = step / (TEXT_TONE_STEPS - 1)

  return Math.round(lerp(TEXT_ACTIVE_LIGHTNESS, TEXT_IDLE_LIGHTNESS, quantized))
}

function rebuildScene() {
  rippleField = new RippleField(viewportWidth || 1, viewportHeight || 1, settings.fieldCellSize)
  clearTextLayer()
  particles = settings.mode === 'text'
    ? createWordParticles(viewportWidth)
    : createDotParticles(viewportWidth, viewportHeight)
  updateTextLayerVisibility()
  accumulatedTime = 0
  draw()
}

const settings: SimulationSettings = {
  ...defaultSettings,
  reset: () => {
    Object.assign(settings, defaultSettings)
    syncGui()
    syncModeFolders()
    rebuildScene()
  },
}

const gui = new GUI({ title: 'Ripples' })
const modeController = gui.add(settings, 'mode', ['dot', 'text']).name('mode')
const dotFolder = gui.addFolder('Dot Settings')
const textFolder = gui.addFolder('Text Settings')
const dotSpacingController = dotFolder.add(settings, 'dotSpacing', 12, 60, 1).name('dot spacing')
const dotRadiusController = dotFolder.add(settings, 'dotRadius', 1, 6, 0.1).name('dot radius')
const textCountController = textFolder.add(settings, 'textCount', 20, 800, 1).name('text count')
const textSizeController = textFolder.add(settings, 'textSize', 10, 96, 1).name('text size')
const textSelectableController = textFolder.add(settings, 'textSelectable').name('text selectable')
const fieldCellSizeController = gui.add(settings, 'fieldCellSize', 8, 40, 1).name('field cell')
gui.add(settings, 'rippleSpeed', 0.1, 4, 0.1).name('ripple speed')
gui.add(settings, 'dropRadius', 40, 320, 1).name('click radius')
gui.add(settings, 'dropStrength', 1, 30, 0.1).name('click strength')
gui.add(settings, 'dragDropRadius', 20, 220, 1).name('drag radius')
gui.add(settings, 'dragDropStrength', 0.1, 10, 0.1).name('drag strength')
gui.add(settings, 'dragMinDistance', 2, 40, 1).name('drag spacing')
gui.add(settings, 'rippleForce', 1000, 80000, 100).name('ripple force')
gui.add(settings, 'springStrength', 1, 60, 0.5).name('spring')
gui.add(settings, 'motionDamping', 1, 30, 0.5).name('damping')
gui.add(settings, 'reset').name('reset')

const controllers = gui.controllers
gui.close()

function syncGui() {
  for (const controller of controllers) {
    controller.updateDisplay()
  }
}

function syncModeFolders() {
  setGuiSectionVisible(dotFolder, settings.mode === 'dot')
  setGuiSectionVisible(textFolder, settings.mode === 'text')
}

function syncMode(value: RenderMode) {
  settings.mode = value
  syncGui()
  syncModeFolders()
  updateTextLayerVisibility()
  rebuildScene()
}

modeController.onFinishChange((value: RenderMode) => {
  syncMode(value)
})
dotSpacingController.onFinishChange(() => {
  if (settings.mode === 'dot') {
    rebuildScene()
  }
})
fieldCellSizeController.onFinishChange(rebuildScene)
dotRadiusController.onChange(draw)
textCountController.onFinishChange(() => {
  if (settings.mode === 'text') {
    rebuildScene()
  }
})
textSizeController.onFinishChange(() => {
  if (settings.mode === 'text') {
    rebuildScene()
  }
})
textSelectableController.onChange(() => {
  updateTextLayerVisibility()
})

syncModeFolders()

rippleField = new RippleField(1, 1, settings.fieldCellSize)

function createDotParticles(width: number, height: number) {
  const nextParticles: DotParticle[] = []
  const offsetX = (width % settings.dotSpacing) * 0.5
  const offsetY = (height % settings.dotSpacing) * 0.5

  for (let y = offsetY; y <= height; y += settings.dotSpacing) {
    for (let x = offsetX; x <= width; x += settings.dotSpacing) {
      nextParticles.push({
        kind: 'dot',
        originX: x,
        originY: y,
        x,
        y,
        vx: 0,
        vy: 0,
      })
    }
  }

  return nextParticles
}

function sliceLineSegments(prepared: PreparedTextWithSegments, start: number, end: number) {
  const segments: { text: string; width: number }[] = []

  for (let index = start; index < end; index += 1) {
    segments.push({
      text: prepared.segments[index] ?? '',
      width: prepared.widths[index] ?? 0,
    })
  }

  return segments
}

function createWordParticles(width: number) {
  const layoutWidth = Math.max(120, width - TEXT_BLOCK_PADDING * 2)
  const textLineHeight = getTextLineHeight()
  const prepared = getPreparedText()
  const layoutResult = layoutWithLines(prepared, layoutWidth, textLineHeight)
  const nextParticles: WordParticle[] = []

  syncTextLayerTypography()

  for (let lineIndex = 0; lineIndex < layoutResult.lines.length; lineIndex += 1) {
    const line = layoutResult.lines[lineIndex]!
    const lineTop = TEXT_BLOCK_PADDING + lineIndex * textLineHeight
    let x = TEXT_BLOCK_PADDING
    const lineSegments = sliceLineSegments(prepared, line.start.segmentIndex, line.end.segmentIndex)

    for (const segment of lineSegments) {
      if (segment.text.trim().length === 0) {
        x += segment.width
        continue
      }

      nextParticles.push({
        kind: 'word',
        text: segment.text,
        width: segment.width,
        height: textLineHeight,
        element: createWordElement(segment.text),
        renderedX: Number.NaN,
        renderedY: Number.NaN,
        renderedTone: Number.NaN,
        originX: x,
        originY: lineTop,
        x,
        y: lineTop,
        vx: 0,
        vy: 0,
      })
      x += segment.width
    }
  }

  return nextParticles
}

function createWordElement(text: string) {
  const element = document.createElement('span')
  element.className = 'text-word'
  element.textContent = text
  element.style.fontFamily = TEXT_FONT_FAMILY
  element.style.fontWeight = String(TEXT_FONT_WEIGHT)
  element.style.fontSize = `${settings.textSize}px`
  element.style.lineHeight = `${getTextLineHeight()}px`
  element.style.userSelect = settings.textSelectable ? 'text' : 'none'
  element.style.webkitUserSelect = settings.textSelectable ? 'text' : 'none'
  textLayer.append(element)
  return element
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

  rebuildScene()
}

function updateParticles(dt: number) {
  for (const particle of particles) {
    const sampleX = isWordParticle(particle) ? particle.x + particle.width * 0.5 : particle.x
    const sampleY = isWordParticle(particle) ? particle.y + particle.height * 0.5 : particle.y
    const gradient = rippleField.gradientAt(sampleX, sampleY)
    const rippleFx = -gradient.x * settings.rippleForce
    const rippleFy = -gradient.y * settings.rippleForce
    const springFx = (particle.originX - particle.x) * settings.springStrength
    const springFy = (particle.originY - particle.y) * settings.springStrength
    const dampingFx = -particle.vx * settings.motionDamping
    const dampingFy = -particle.vy * settings.motionDamping

    const ax = rippleFx + springFx + dampingFx
    const ay = rippleFy + springFy + dampingFy

    particle.vx += ax * dt
    particle.vy += ay * dt
    particle.x += particle.vx * dt
    particle.y += particle.vy * dt
  }
}

function updateSimulation(dt: number) {
  accumulatedTime += Math.min(dt, maxFrameDelta)

  let steps = 0

  while (accumulatedTime >= fixedTimeStep && steps < maxSubsteps) {
    rippleField.step()
    updateParticles(fixedTimeStep)
    accumulatedTime -= fixedTimeStep
    steps += 1
  }
}

function draw() {
  context.clearRect(0, 0, viewportWidth, viewportHeight)
  context.fillStyle = '#111'

  if (settings.mode === 'text') {
    for (const particle of particles) {
      if (particle.kind === 'word') {
        const lightness = getQuantizedLightness(particle)

        if (
          !Number.isFinite(particle.renderedX) ||
          !Number.isFinite(particle.renderedY) ||
          Math.abs(particle.x - particle.renderedX) > TEXT_POSITION_EPSILON ||
          Math.abs(particle.y - particle.renderedY) > TEXT_POSITION_EPSILON
        ) {
          particle.element.style.transform = `translate3d(${particle.x}px, ${particle.y}px, 0)`
          particle.renderedX = particle.x
          particle.renderedY = particle.y
        }

        if (lightness !== particle.renderedTone) {
          particle.element.style.color = `rgb(${lightness}, ${lightness}, ${lightness})`
          particle.renderedTone = lightness
        }
      }
    }

    return
  }

  for (const particle of particles) {
    const lightness = getParticleLightness(particle)
    context.fillStyle = `rgb(${lightness}, ${lightness}, ${lightness})`
    context.beginPath()
    context.arc(particle.x, particle.y, settings.dotRadius, 0, Math.PI * 2)
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

  if (distance < settings.dragMinDistance) {
    return
  }

  const steps = Math.max(1, Math.ceil(distance / settings.dragMinDistance))

  for (let index = 1; index <= steps; index += 1) {
    const t = index / steps
    rippleField.disturb(
      lerp(lastDragX, x, t),
      lerp(lastDragY, y, t),
      settings.dragDropRadius,
      settings.dragDropStrength,
    )
  }

  lastDragX = x
  lastDragY = y
}

function startTextInteraction(event: PointerEvent) {
  if (settings.mode !== 'text') {
    return
  }

  isPointerDown = true
  activePointerId = event.pointerId
  lastDragX = event.clientX
  lastDragY = event.clientY
  rippleField.disturb(event.clientX, event.clientY, settings.dropRadius, settings.dropStrength)
}

function moveTextInteraction(event: PointerEvent) {
  if (settings.mode !== 'text') {
    return
  }

  if (!isPointerDown || event.pointerId !== activePointerId || event.buttons === 0) {
    return
  }

  addDragDisturbance(event.clientX, event.clientY)
}

canvas.addEventListener('pointerdown', (event) => {
  if (settings.mode === 'text') {
    return
  }

  isPointerDown = true
  activePointerId = event.pointerId
  lastDragX = event.clientX
  lastDragY = event.clientY
  canvas.setPointerCapture(event.pointerId)
  rippleField.disturb(event.clientX, event.clientY, settings.dropRadius, settings.dropStrength)
})

canvas.addEventListener('pointermove', (event) => {
  if (settings.mode === 'text') {
    return
  }

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

textLayer.addEventListener('pointerdown', startTextInteraction)
textLayer.addEventListener('pointermove', moveTextInteraction)
window.addEventListener('pointerup', endPointerInteraction)
window.addEventListener('pointercancel', endPointerInteraction)

window.addEventListener('resize', resizeCanvas)

resizeCanvas()
window.requestAnimationFrame(frame)
