import React, { useEffect, useRef } from "react"
import DrawingApp from "./DrawingApp"
import { CanvasProvider } from "./CanvasContext"
import SaveDrawingForm from "./SaveDrawingForm"
import DrawingToolbar from "./DrawingToolbar"

function CreateDrawing({collections, user, setCollections}){


  return (
    <CanvasProvider>
      <div className="drawing-app">
        <DrawingApp />
        <DrawingToolbar />
      </div>
      <div className="drawing-form">
        <SaveDrawingForm setCollections={setCollections} collections={collections} user={user}/>
      </div>
    </CanvasProvider>
  )
}

export default CreateDrawing
