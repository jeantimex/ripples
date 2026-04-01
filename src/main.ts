import './style.css'

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

function draw() {
  const width = window.innerWidth
  const height = window.innerHeight

  context.clearRect(0, 0, width, height)
  context.fillStyle = '#000'
  context.beginPath()
  context.arc(width / 2, height / 2, 4, 0, Math.PI * 2)
  context.fill()
}

function resizeCanvas() {
  const width = window.innerWidth
  const height = window.innerHeight
  const dpr = window.devicePixelRatio || 1

  canvas.width = Math.round(width * dpr)
  canvas.height = Math.round(height * dpr)
  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`

  context.setTransform(dpr, 0, 0, dpr, 0, 0)
  draw()
}

window.addEventListener('resize', resizeCanvas)

resizeCanvas()
