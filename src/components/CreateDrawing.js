import { useEffect, useRef } from "react"

function CreateDrawing(){

  let ref = useRef()

  useEffect(() => {
    let canvas = ref.current;
    let context = canvas.getContext('2d');
    context.beginPath();
    context.arc(50, 50, 50, 0, 2 * Math.PI);
    context.fill();
    });

  return (
    <canvas 
    ref={ref}
    style={{ width: '400px', height: '400px' }}
    >
      box for drawing
    </canvas>
  )
}

export default CreateDrawing
