import { useParams } from "react-router-dom"
import { useState } from "react"

function PictureShow({updatePicture, drawings}){
  
  const params = useParams()
  const selectedDrawing = drawings.find( drawing => {
    return drawing.id === parseInt(params.id)
  })

  const {name, favorite, description, image_url, isPublic} = selectedDrawing

  const [updatePictureFormData, setUpdatePictureFormData] = useState({
    name: name,
    favorite: favorite,
    description: description,
    isPublic: isPublic
  })

  console.log("initial", updatePictureFormData)
    function handleFormChange(event) {
      const property = event.target.name
      let value = event.target.value

      if (event.target.type === "checkbox") {
        value = event.target.checked;
      }

    setUpdatePictureFormData({...updatePictureFormData, [property]:value})
    }

    function handleFormSubmit(event) {
      event.preventDefault()
      updatePicture(updatePictureFormData, selectedDrawing.id)
    }


  return (
    <div>
      <h1>{name}</h1>
      <img src={image_url} alt={name} />
      <h3>Description:</h3>
      <p>
        {description}
      </p>
      <hr></hr>
      <h3>Update This Drawing</h3>
      <form onSubmit={handleFormSubmit}>
        <input onChange={handleFormChange} type="text" name="name" placeholder={name} value={updatePictureFormData.name}></input><br></br>
        <textarea onChange={handleFormChange} name="description" placeholder={description} rows="15" cols="40"> value={updatePictureFormData.description}</textarea><br></br>
        <input onChange={handleFormChange} id="isPublic" type="checkbox" name="isPublic" value={updatePictureFormData.isPublic}></input>
        <label for="isPublic">Mark as public?</label><br></br>
        <input type="submit" value="Update This Drawing"></input>
      </form>
    </div>
  )
}

export default PictureShow