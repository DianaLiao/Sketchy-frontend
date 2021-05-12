import { useParams, useHistory } from "react-router-dom"
import { useState, useEffect } from "react"

function PictureShow({updatePicture, drawings}){
  
  const history = useHistory()

  const {id} = useParams()
  // const selectedDrawing = drawings.find( drawing => {
  //   return drawing.id === parseInt(params.id)
  // })

  const [picture, setPicture] = useState({})
  console.log(id)

  useEffect(() => {
    fetch(`http://localhost:3000/pictures/${id}`)
      .then(resp => resp.json())
      .then(data => setPicture(data))
  }, [id])

  const {name, favorite, description, image_url, isPublic} = picture

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
      updatePicture(updatePictureFormData, id)
    }

    function handlePictureDeletion() {
      fetch(`http://localhost:3000/pictures/${id}`, {method: 'DELETE'})
      .then(console.log)
      .then(_ => {
        history.push('/')
      })

    }

  return (
    <div className="show-picture">
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
        <textarea onChange={handleFormChange} name="description" placeholder={description} rows="15" cols="40" value={updatePictureFormData.description}></textarea><br></br>
        <input onChange={handleFormChange} id="isPublic" type="checkbox" name="isPublic" value={updatePictureFormData.isPublic}></input>
        <label for="isPublic">Mark as public?</label><br></br>
        <input type="submit" value="Update This Drawing"></input>
      </form>
      <br></br>
      <button onClick={handlePictureDeletion} >Delete This Drawing</button>
    </div>
  )
}

export default PictureShow