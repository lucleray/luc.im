import { useReducer, useRef, useEffect, useCallback } from 'react'

interface Point {
  x: number
  y: number
}

interface State {
  mode: null | 'draw'
  draft: null | Point[]
  shapes: Point[][]
}

type Action =
  | { type: 'mousedown' }
  | { type: 'mouseup' }
  | { type: 'mousemove'; x: number; y: number }

function init() {
  return {
    mode: null,
    draft: null,
    shapes: []
  }
}

function reducer(state: State, action: Action): State {
  if (action.type === 'mousedown') {
    return { ...state, mode: 'draw' }
  }

  if (action.type === 'mouseup') {
    if (state.draft) {
      return {
        ...state,
        mode: null,
        draft: null,
        shapes:
          state.draft !== null ? [...state.shapes, state.draft] : state.shapes
      }
    }

    return {
      ...state,
      mode: null,
      draft: null,
      shapes:
        state.draft !== null ? [...state.shapes, state.draft] : state.shapes
    }
  }

  if (action.type === 'mousemove') {
    if (state.mode === 'draw') {
      const { x, y } = action
      return {
        ...state,
        draft: [...(state.draft || []), { x, y }]
      }
    }
  }

  return state
}

export const Canvas: React.FC = ({ children }) => {
  const [{ draft, shapes }, dispatch] = useReducer(reducer, null, init)

  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // make canvas full page size
  useEffect(() => {
    const pixelRatio = window.devicePixelRatio ?? 1
    const width = document.body.clientWidth
    const height = document.body.clientHeight
    canvasRef.current!.width = width * pixelRatio
    canvasRef.current!.height = height * pixelRatio
    canvasRef.current!.style.width = width + 'px'
    canvasRef.current!.style.height = height + 'px'
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

    if (draft?.length) {
      context.beginPath()
      context.strokeStyle = 'rgb(32, 89, 246)'
      context.moveTo(draft[0].x, draft[0].y)
      for (let point of draft) {
        context.lineTo(point.x, point.y)
      }
      context.stroke()
    }

    for (let shape of shapes) {
      if (shape.length) {
        context.beginPath()
        context.strokeStyle = 'grey'
        context.lineWidth = 2
        context.moveTo(shape[0].x, shape[0].y)
        for (let point of shape) {
          context.lineTo(point.x, point.y)
        }
        context.stroke()
      }
    }
  }, [draft, shapes])

  const onMouseDown = useCallback(() => dispatch({ type: 'mousedown' }), [])
  const onMouseUp = useCallback(() => {
    dispatch({ type: 'mouseup' })
  }, [])
  const onMouseMove = useCallback(event => {
    dispatch({
      type: 'mousemove',
      x: event.clientX + window.scrollX,
      y: event.clientY + window.scrollY
    })
  }, [])

  return (
    <div
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onWheel={onMouseMove}
      style={{ userSelect: 'none' }}
    >
      <canvas
        ref={canvasRef}
        width={0}
        height={0}
        style={{ position: 'absolute', width: 0, height: 0, zIndex: -1 }}
      />
      <div ref={containerRef}>{children}</div>
    </div>
  )
}