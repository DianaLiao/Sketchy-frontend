import {useCanvas} from "./CanvasContext"
import {useState} from "react"

function SaveDrawingForm() {

  const {saveCanvas} = useCanvas()
  
  const blankForm = {title:"", description:""}
  const [formData, setFormData] = useState(blankForm)

  function handleFormChange(event){
    console.log(event.target)
    console.log(event.target.value)
  }
  
  return (
    <form>
      <label for="title">Title:</label>
      <input onChange={handleFormChange} type="text" name="title" value={formData.title}></input>
      <input onChange={handleFormChange} type="submit" value="Save?"></input>
    </form>

  )
}

export default SaveDrawingForm