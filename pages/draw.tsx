import React, { useReducer, useRef, useEffect, useCallback } from 'react'

const EraserSize = 13
const EraserCursor = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='${EraserSize}' height='${EraserSize}' viewBox='0 0 10 10'%3e %3ccircle id='r' cx='5' cy='5' r='5' fill='rgba(255,255,255,0.3)' /%3e %3c/svg%3e") ${EraserSize} ${EraserSize}, default`

interface Point {
  x: number
  y: number
}

enum Mode {
  draw,
  erase,
}

interface Stroke {
  points: Point[]
  highlight?: boolean
}

interface State {
  mode: Mode
  draftStroke: null | Point[]
  strokes: Stroke[]
  paintId: number
}

type Action =
  | { type: 'click-draw' }
  | { type: 'click-erase' }
  | { type: 'erase-stroke'; strokeIndex: number }
  | { type: 'highlight-stroke'; strokeIndex: number }
  | { type: 'reset-highlight' }
  | { type: 'drawing-start' }
  | { type: 'drawing-stop' }
  | { type: 'drawing-move'; x: number; y: number }
  | { type: 'repaint' }

function init() {
  return {
    draftStroke: null,
    strokes: [],
    mode: Mode.draw,
    paintId: Math.random(),
  }
}

function reducer(state: State, action: Action): State {
  if (action.type === 'repaint') {
    return { ...state, paintId: Math.random() }
  }

  if (action.type === 'click-draw') {
    return { ...state, mode: Mode.draw }
  }

  if (action.type === 'click-erase') {
    return { ...state, mode: Mode.erase }
  }

  if (action.type === 'erase-stroke') {
    return {
      ...state,
      strokes: state.strokes.filter((_, index) => index !== action.strokeIndex),
    }
  }

  if (action.type === 'highlight-stroke') {
    return {
      ...state,
      strokes: state.strokes.map((stroke, index) => ({
        ...stroke,
        highlight: index === action.strokeIndex,
      })),
    }
  }

  if (action.type === 'reset-highlight') {
    return {
      ...state,
      strokes: state.strokes.map((stroke) => ({ ...stroke, highlight: false })),
    }
  }

  if (state.mode === Mode.draw) {
    if (action.type === 'drawing-start') {
      return { ...state, draftStroke: [] }
    }

    if (action.type === 'drawing-stop') {
      const stateUpdate = {
        ...state,
        draftStroke: null,
        strokes:
          state.draftStroke !== null
            ? [...state.strokes, { points: state.draftStroke }]
            : state.strokes,
      }

      return stateUpdate
    }

    if (action.type === 'drawing-move') {
      const point = { x: action.x, y: action.y }
      return {
        ...state,
        draftStroke: state.draftStroke
          ? [...state.draftStroke, point]
          : state.draftStroke,
      }
    }
  }

  if (state.mode === Mode.erase) {
    if (action.type === 'drawing-start') {
      return { ...state, draftStroke: [] }
    }

    if (action.type === 'drawing-stop') {
      const stateUpdate = {
        ...state,
        draftStroke: null,
      }

      return stateUpdate
    }

    if (action.type === 'drawing-move') {
      if (!state.draftStroke) {
        return state
      }

      const epoint = { x: action.x, y: action.y }
      const esize2 = EraserSize * EraserSize

      let didEraseStroke = false
      const erasedStrokes: Stroke[] = []

      for (let stroke of state.strokes) {
        let points = []

        for (let spoint of stroke.points) {
          // calculate distance
          const dx = spoint.x - epoint.x
          const dy = spoint.y - epoint.y
          const d = dx * dx + dy * dy

          if (d < esize2) {
            // remove point
            didEraseStroke = true

            if (points.length > 1) {
              erasedStrokes.push({ points })
              points = []
            }
          } else {
            // keep point
            points.push(spoint)
          }
        }

        if (points.length > 1) {
          erasedStrokes.push({ points })
        }
      }

      return {
        ...state,
        strokes: didEraseStroke ? erasedStrokes : state.strokes,
      }
    }
  }

  return state
}

export default function Draw() {
  const [{ mode, draftStroke, strokes, paintId }, dispatch] = useReducer(
    reducer,
    null,
    init
  )

  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    // make canvas full page size
    const resizeCanvas = () => {
      if (!canvasRef.current) return

      const pixelRatio = window.devicePixelRatio ?? 1
      const width = window.innerWidth
      const height = window.innerHeight
      canvasRef.current!.width = width * pixelRatio
      canvasRef.current!.height = height * pixelRatio
      canvasRef.current!.style.width = width + 'px'
      canvasRef.current!.style.height = height + 'px'

      // repaint because changing width/height clears the canvas
      dispatch({ type: 'repaint' })
    }

    // run when component loads
    resizeCanvas()

    // run when the window is resized
    window.addEventListener('resize', resizeCanvas)
    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  // draw drafts
  useEffect(() => {
    const canvas = canvasRef.current!
    const context = canvas.getContext('2d')!

    const pixelRatio = window.devicePixelRatio ?? 1

    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)

    context.clearRect(
      0,
      0,
      canvas.width / pixelRatio,
      canvas.height / pixelRatio
    )

    if (draftStroke?.length && mode !== Mode.erase) {
      context.beginPath()
      context.strokeStyle = 'grey'
      context.lineWidth = 2
      context.moveTo(draftStroke[0].x, draftStroke[0].y)
      for (let point of draftStroke) {
        context.lineTo(point.x, point.y)
      }
      context.stroke()
    }

    for (let stroke of strokes) {
      if (stroke.points.length) {
        context.beginPath()
        context.strokeStyle = stroke.highlight ? 'white' : 'grey'
        context.lineWidth = 2
        context.moveTo(stroke.points[0].x, stroke.points[0].y)
        for (let point of stroke.points) {
          context.lineTo(point.x, point.y)
        }
        context.stroke()
      }
    }
  }, [draftStroke, strokes, mode, paintId])

  const onMouseDown = useCallback(() => dispatch({ type: 'drawing-start' }), [])
  const onMouseUp = useCallback(() => {
    dispatch({ type: 'drawing-stop' })
  }, [])
  const onMouseMove = useCallback((event: React.MouseEvent) => {
    dispatch({
      type: 'drawing-move',
      x: event.clientX,
      y: event.clientY,
    })
  }, [])

  const onDrawButton = useCallback(() => {
    dispatch({ type: 'click-draw' })
  }, [])
  const onEraseButton = useCallback(() => {
    dispatch({ type: 'click-erase' })
  }, [])

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.key === 'e') {
        dispatch({ type: 'click-erase' })
      }
      if (event.key === 'd') {
        dispatch({ type: 'click-draw' })
      }
    }

    document.addEventListener('keypress', listener)
    return () => {
      document.removeEventListener('keypress', listener)
    }
  }, [])

  const onTouchStart = useCallback(() => {
    dispatch({ type: 'drawing-start' })
  }, [])
  const onTouchEnd = useCallback(() => {
    dispatch({ type: 'drawing-stop' })
  }, [])
  const onTouchMove = useCallback((event: TouchEvent) => {
    event.preventDefault()

    for (let i = 0; i < event.touches.length; i++) {
      const touch = event.touches[i]
      dispatch({
        type: 'drawing-move',
        x: touch.clientX + window.scrollX,
        y: touch.clientY + window.scrollY,
      })
    }
  }, [])

  useEffect(() => {
    canvasRef.current?.addEventListener('touchmove', onTouchMove)
    return () =>
      canvasRef.current?.removeEventListener('touchmove', onTouchMove)
  }, [])

  return (
    <div>
      <canvas
        ref={canvasRef}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onWheel={onMouseMove}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        width={0}
        height={0}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          cursor: mode === Mode.erase ? EraserCursor : 'default',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 10,
          left: 20,
        }}
      >
        <button
          className={mode === Mode.draw ? 'pressed' : ''}
          onClick={onDrawButton}
        >
          D – Draw
        </button>
        <button
          className={mode === Mode.erase ? 'pressed' : ''}
          onClick={onEraseButton}
        >
          E – Erase
        </button>
        <button
          style={{ display: 'none' }}
          onClick={() => {
            // let's use a funny format
            const WAVES_BINARY = '〜⌇'.split('')
            const CARDS_COLORS = '♠︎♣︎♥︎♦︎'.split('')
            const CARDS =
              '🂡 🂢 🂣 🂤 🂥 🂦 🂧 🂨 🂩 🂪 🂫 🂬 🂭 🂮 🂱 🂲 🂳 🂴 🂵 🂶 🂷 🂸 🂹 🂺 🂻 🂼 🂽 🂾 🃁 🃂 🃃 🃄 🃅 🃆 🃇 🃈 🃉 🃊 🃋 🃌 🃍 🃎 🃑 🃒 🃓 🃔 🃕 🃖 🃗 🃘 🃙 🃚 🃛 🃜 🃝 🃞'.split(
                ' '
              )
            const SIGNS = '⏁⏄⏇⏉⏀⏂⏅⏆┼⏊⏈'.split('')
            const STARS =
              '✢✣✤✥✦✧★☆✯✩✪✫✬✭✮✷✵✸✹✺❊✻✽✼❉✱✲✾❃❋✳︎✴︎❇︎❈※❅❆❄︎⚙︎✿❀❁❂'.split('')
            const EMOJIS =
              '🫶 🤲 👐 🙌 👏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 🫰 🤟 🤘 👌 🤌 🤏 🫳 🫴 👈 👉 👆 👇 ✋ 🤚 🖐 🖖 👋 🤙 🫲 🫱 🙏 🫵'.split(
                ' '
              )
            const NUMBERS = '0123456789'.split('')
            const NUMBERS_LETTERS =
              '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
                ''
              )

            const chars = NUMBERS_LETTERS
            const charLength = chars.length

            const makeItWavy = (num: number) => {
              let output = ''
              let v = num
              while (v > 0) {
                const remainder = v % charLength
                output += chars[remainder]
                v = (v - remainder) / charLength
              }

              return output
            }

            let str = strokes
              .map((stroke) =>
                stroke.points
                  .map(
                    (point) => `${makeItWavy(point.x)}.${makeItWavy(point.y)}`
                  )
                  .join('.')
              )
              .join(':')

            console.log(str)

            navigator.clipboard.writeText(str)
          }}
        >
          Export
        </button>
      </div>
      {strokes.length > 0 ? (
        <div
          style={{
            position: 'absolute',
            bottom: 10,
            left: 20,
            background: 'rgba(255, 255, 255, 0.05)',
            padding: 'var(--space2) var(--space4)',
          }}
          onMouseOut={() => {
            dispatch({ type: 'reset-highlight' })
          }}
        >
          {strokes.map((stroke, strokeIndex) => (
            <div
              style={{
                cursor: 'pointer',
                opacity: 0.3,
              }}
              onMouseOver={() => {
                dispatch({ type: 'highlight-stroke', strokeIndex })
              }}
              onClick={() => {
                if (mode === Mode.erase) {
                  dispatch({ type: 'erase-stroke', strokeIndex })
                }
              }}
            >
              #{strokeIndex}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}
