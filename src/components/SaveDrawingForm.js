import {useCanvas} from "./CanvasContext"
import {useState} from "react"

function SaveDrawingForm() {

  const {saveCanvas} = useCanvas()
  
  const blankForm = {name:"", description:"", public:false, image_url:""}
  const [formData, setFormData] = useState(blankForm)

  function handleFormChange(event){
    const property = event.target.name
    let value = event.target.value

    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setFormData({...formData, [property]:value})

  }

  function handleFormSubmit(event){
    event.preventDefault()
    setFormData({...formData, image_url:saveCanvas()})

    const fetchObj = {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(formData)
    }

    fetch("http://localhost:3000/pictures", fetchObj)
      .then(resp => resp.json())
      .then(console.log)

  }
  
  return (
    <form onSubmit={handleFormSubmit}>
      <label for="name">Name:</label>
      <input onChange={handleFormChange} type="text" name="name" value={formData.name}></input><br></br>
      <label for="description">Description:</label>
      <input onChange={handleFormChange} type="text" name="description" value={formData.description}></input><br></br>
      <label for="public">Make public?</label>
      <input onChange={handleFormChange} type="checkbox" name="public" value={formData.public}></input>
      <input type="submit" value="Save?"></input>
    </form>

  )
}

export default SaveDrawingForm