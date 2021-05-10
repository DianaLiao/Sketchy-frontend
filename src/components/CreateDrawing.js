import React, { useEffect, useRef } from "react"
import DrawingApp from "./DrawingApp"
import { CanvasProvider } from "./CanvasContext"
import SaveDrawingForm from "./SaveDrawingForm"

function CreateDrawing(){


  return (
    <CanvasProvider>
      <DrawingApp />
      <SaveDrawingForm />
    </CanvasProvider>
  )
}

export default CreateDrawing
