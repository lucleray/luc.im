import { useReducer, useRef, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import { decodeBase64URL } from '../lib/b64url'

interface Point {
  x: number
  y: number
}

interface State {
  draft: null | Point[]
  drawings: Point[][]
}

type Action =
  | { type: 'init'; state: State }
  | { type: 'drawing-start' }
  | { type: 'drawing-stop' }
  | { type: 'drawing-move'; x: number; y: number }

function report(state: State) {
  fetch('/api/report-sketch', {
    method: 'POST',
    body: JSON.stringify(state),
    headers: { 'content-type': 'application/json' }
  })
}

function init() {
  return { draft: null, drawings: [] }
}

function reducer(state: State, action: Action): State {
  if (action.type === 'init') {
    return action.state
  }

  if (action.type === 'drawing-start') {
    return { ...state, draft: [] }
  }

  if (action.type === 'drawing-stop') {
    const stateUpdate = {
      ...state,
      draft: null,
      drawings:
        state.draft !== null ? [...state.drawings, state.draft] : state.drawings
    }
    report(stateUpdate)
    return stateUpdate
  }

  if (action.type === 'drawing-move') {
    const point = { x: action.x, y: action.y }
    return {
      ...state,
      draft: state.draft ? [...state.draft, point] : state.draft
    }
  }
}

export const Canvas: React.FC = ({ children }) => {
  const [{ draft, drawings }, dispatch] = useReducer(reducer, null, init)

  const containerRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

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

    for (let shape of drawings) {
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
  }, [draft, drawings])

  const onMouseDown = useCallback(() => dispatch({ type: 'drawing-start' }), [])
  const onMouseUp = useCallback(() => {
    dispatch({ type: 'drawing-stop' })
  }, [])
  const onMouseMove = useCallback((event: React.MouseEvent) => {
    dispatch({
      type: 'drawing-move',
      x: event.clientX + window.scrollX,
      y: event.clientY + window.scrollY
    })
  }, [])

  const doubleTouchRef = useRef(false)
  const doubleTouchOnRef = useRef(false)
  const onTouchStart = useCallback(() => {
    if (doubleTouchOnRef.current) {
      dispatch({ type: 'drawing-start' })
    }

    if (doubleTouchRef.current) {
      doubleTouchOnRef.current = !doubleTouchOnRef.current
    } else {
      doubleTouchRef.current = true
      setTimeout(() => {
        doubleTouchRef.current = false
      }, 300)
    }
  }, [])
  const onTouchEnd = useCallback(() => {
    if (doubleTouchOnRef.current) {
      dispatch({ type: 'drawing-stop' })
    }
  }, [])
  const onTouchMove = useCallback((event: TouchEvent) => {
    if (doubleTouchOnRef.current) {
      event.preventDefault()

      for (let i = 0; i < event.touches.length; i++) {
        const touch = event.touches[i]
        dispatch({
          type: 'drawing-move',
          x: touch.clientX + window.scrollX,
          y: touch.clientY + window.scrollY
        })
      }
    }
  }, [])

  useEffect(() => {
    containerRef.current?.addEventListener('touchmove', onTouchMove)
    return () =>
      containerRef.current?.removeEventListener('touchmove', onTouchMove)
  }, [])

  const router = useRouter()
  useEffect(() => {
    try {
      if (typeof router.query.sketch === 'string') {
        const state = JSON.parse(decodeBase64URL(router.query.sketch))
        dispatch({ type: 'init', state })
      }
    } catch (_) {}
  }, [router.query])

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={0}
        height={0}
        style={{ position: 'absolute', width: 0, height: 0, zIndex: -1 }}
      />
      <div
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onWheel={onMouseMove}
        ref={containerRef}
        style={{ userSelect: 'none' }}
      >
        {children}
      </div>
    </div>
  )
}
