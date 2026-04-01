# Ripples

An interactive ripple experiment built with TypeScript.

https://github.com/user-attachments/assets/803a028c-d6e4-488a-bf36-4cca2ce0fb5c

The project supports two render modes:

- `text`: a field of words laid out with [`@chenglou/pretext`](https://github.com/chenglou/pretext) and rendered as individually animated DOM spans
- `dot`: a dense field of particles rendered on a canvas

## Demo Behavior

Clicking or dragging injects energy into a ripple field. That field does not move the dots or words directly. Instead, each particle samples the local ripple gradient, gets pushed by that force, and is then pulled back toward its original position by a spring.

This gives the effect two layers:

- a wave simulation that spreads across the viewport
- a particle simulation that turns wave gradients into visible motion

The result is a surface that can feel liquid while still preserving an underlying structure.

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Controls

The project uses `lil-gui` for live tuning.

Common controls:

- `field cell`: resolution of the ripple grid
- `ripple speed`: how quickly waves propagate through the field
- `click radius` and `click strength`: size and intensity of a pointer disturbance
- `drag radius`, `drag strength`, and `drag spacing`: behavior while dragging
- `ripple force`: how strongly particles respond to the ripple gradient
- `spring` and `damping`: how quickly particles return to rest

Mode-specific controls:

- `Dot Settings`: `dot spacing`, `dot radius`
- `Text Settings`: `text count`, `text size`

## How Ripples Are Created

The ripple system is implemented as a height field over a coarse 2D grid.

Each cell stores:

- a current height
- a current velocity

On every simulation step:

1. The field computes the average of the four neighboring heights.
2. The difference between that average and the current cell height accelerates the cell velocity.
3. Velocity is slightly damped.
4. The next height is computed from the updated velocity.

This is a simple discrete wave solver. Pointer input disturbs nearby cells by adding a smooth radial drop into the field. Over time, that disturbance propagates outward as ripples.

Particles do not sample the field height directly. They sample the local gradient of the field. That gradient becomes a directional force:

- steep slope to the right pushes particles left
- steep slope downward pushes particles upward

Each particle also has:

- a spring force back to its origin
- a damping force that reduces velocity over time

That combination produces the motion you see: the wave passes through, particles drift, and then they settle back into place.

## How `pretext` Is Used

Text mode uses `@chenglou/pretext` to compute word layout before animation starts.

The flow is:

1. Generate a source string by repeating a base Shakespeare passage until the configured `text count` is reached.
2. Build a font string from the current text settings.
3. Call `prepareWithSegments(text, font)` once for the current text/font pair.
4. Call `layoutWithLines(prepared, maxWidth, lineHeight)` to compute wrapped lines.
5. Convert each non-space segment into a word particle with an origin position.

`pretext` is important here because it separates two expensive problems:

- text measurement
- text layout across a constrained width

Once the text is prepared, the project can turn the layout output into positioned words without relying on normal browser flow for line wrapping. That makes it possible to:

- keep each word as an independent animated unit
- preserve accurate wrapping when the text count or font size changes
- use CSS transforms for motion while keeping the text selectable

## Rendering Approach

### Dot Mode

Dot mode renders directly to the canvas. Every frame:

- the canvas is cleared
- each dot is drawn as a circle
- dot color is derived from movement speed

### Text Mode

Text mode uses a layered DOM approach:

- the ripple field still runs in JavaScript
- each word is an absolutely positioned `span`
- each frame updates the span transform and grayscale tone

Using DOM text instead of canvas makes the text selectable while still allowing the ripple motion to affect each word independently.

## Performance Notes

Text mode is more expensive than dot mode because it updates many DOM nodes every frame.

Some optimizations already in place:

- word positions are updated with `translate3d(...)`
- text color is quantized to reduce style churn
- DOM writes are skipped when a word has barely moved
- the text layer uses CSS containment hints

If you want to push the text count much higher, the next likely optimizations would be reducing the number of DOM nodes, grouping words, or moving the text rendering back to canvas or WebGL.

## Stack

- Vite
- TypeScript
- Canvas 2D
- `lil-gui`
- `@chenglou/pretext`
