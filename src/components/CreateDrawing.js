import React, { useEffect, useRef } from "react"
import DrawingApp from "./DrawingApp"
import { CanvasProvider } from "./CanvasContext"

function CreateDrawing(){


  return (
    <CanvasProvider>
      <DrawingApp />
      <button>
        Save?
      </button>
    </CanvasProvider>
  )
}

export default CreateDrawing
