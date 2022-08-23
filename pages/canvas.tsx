import React, { useRef, useEffect } from 'react'

function Canvas(props: { width?: number; height?: number }) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  // make canvas full page size
  useEffect(() => {
    const pixelRatio = window.devicePixelRatio ?? 1
    const width = props.width ?? document.body.clientWidth
    const height = props.height ?? document.body.clientHeight
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

    context.setTransform(pixelRatio, 0, 0, -pixelRatio, 500, 500)

    context.clearRect(
      0,
      0,
      canvas.width / pixelRatio,
      canvas.height / pixelRatio
    )

    for (let tr = 0; tr < 1; tr++) {
      let x1 = (t: number) =>
        Math.cos((t / 100) * Math.PI * 2) * (Math.sin(t / 1000) * 100) + tr * 3
      let y1 = (t: number) =>
        Math.sin((t / 100) * Math.PI * 2) *
        (Math.sin(t / 500) * 50) *
        (1 + tr / 3)

      for (let t = 1; t < 1000; t++) {
        context.beginPath()
        context.lineWidth = 2
        context.moveTo(x1(t - 1), y1(t - 1))
        context.strokeStyle = `rgba(${Math.min(
          Math.round(t / 50),
          100
        )},${Math.min(Math.round(tr / 10), 100)},${Math.min(
          Math.round(t * 2),
          255
        )},1)`
        context.lineTo(x1(t), y1(t))
        context.stroke()
      }
    }
  }, [])

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={0}
        height={0}
        style={{ position: 'absolute', width: 0, height: 0, zIndex: -1 }}
      />
      <div ref={containerRef} style={{ userSelect: 'none' }}></div>
    </div>
  )
}

export default function CanvasPage() {
  return (
    <div>
      <Canvas width={500} height={500} />
    </div>
  )
}
