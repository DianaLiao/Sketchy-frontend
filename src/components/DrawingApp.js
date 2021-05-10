import { useCanvas } from "./CanvasContext"
import { useEffect } from "react"


function DrawingApp() {

  const {
    canvasRef,
    prepareCanvas,
    startDrawing,
    finishDrawing,
    draw
  } = useCanvas()

  useEffect(() => {
    prepareCanvas()
  }, [])


  return( 
    <canvas 
    onMouseDown={startDrawing}
    onMouseUp={finishDrawing}
    onMouseMove={draw}
    ref={canvasRef}
    >
      box for drawing
    </canvas>
  )
}

export default DrawingApp