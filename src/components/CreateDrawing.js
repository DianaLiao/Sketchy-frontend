import React, { useEffect, useRef } from "react"
import DrawingApp from "./DrawingApp"
import { CanvasProvider } from "./CanvasContext"
import SaveDrawingForm from "./SaveDrawingForm"

function CreateDrawing({collections, user, setCollections}){


  return (
    <CanvasProvider>
      <DrawingApp />
      <SaveDrawingForm setCollections={setCollections} collections={collections} user={user}/>
    </CanvasProvider>
  )
}

export default CreateDrawing
