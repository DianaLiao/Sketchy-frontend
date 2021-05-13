import {useCanvas} from "./CanvasContext"
import {useRef, useEffect} from "react"
import DrawingTimer from "./DrawingTimer"


function DrawingToolbar(){

  const {changeColor, changeWidth, currentColor, currentWidth} = useCanvas()

  const BrushPreview = () => {
    const previewRef = useRef(null)

    useEffect(() => {
      const canvas = previewRef.current
      const context = canvas.getContext('2d')
      
      context.beginPath();
      context.arc(45, 45, currentWidth/2, 0, 2 * Math.PI);
      context.fillStyle = currentColor
      context.fill()
    }, [])

    return (
      <canvas ref={previewRef} width="90" height="90"></canvas>
    )
  }

  return(
    <aside className="toolbar">
      Tool...bar?
      <label for="color-picker">Choose color:</label>
        <input id="color-picker" type="color" value={currentColor} onChange={changeColor}></input>
      
      <label for="brush-size">Brush Preview:</label>
        <input id="brush-size" type="range" min="1" max="15" value={currentWidth} onChange={changeWidth}></input>
      
      <BrushPreview />
      <DrawingTimer />
    </aside>
  )
}

export default DrawingToolbar