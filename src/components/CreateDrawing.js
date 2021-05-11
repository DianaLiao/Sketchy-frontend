import React, { useEffect, useRef } from "react"
import DrawingApp from "./DrawingApp"
import { CanvasProvider } from "./CanvasContext"
import SaveDrawingForm from "./SaveDrawingForm"

function CreateDrawing({collections, user}){


  return (
    <CanvasProvider>
      <DrawingApp />
      <SaveDrawingForm collections={collections} user={user}/>
    </CanvasProvider>
  )
}

export default CreateDrawing
