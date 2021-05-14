import {useCanvas} from "./CanvasContext"
import {useState} from "react"
import {useHistory} from "react-router-dom"
import { Button, Form } from 'semantic-ui-react'

function SaveDrawingForm({collections, user, setCollections}) {

  const {saveCanvas} = useCanvas()
  
  const blankForm = {name:"", description:"", public:false, image_url:"", collection_id:"", user_id:user.id}
  const [formData, setFormData] = useState(blankForm)

  const userId = user.id 

  const history = useHistory()

  function handleFormChange(event){
    const property = event.target.name
    let value = event.target.value

    const image_url = saveCanvas()

    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setFormData({...formData, [property]:value, image_url})
  }

  function handleFormSubmit(event){
    event.preventDefault()
    const image_url = saveCanvas()
    const collection_id = event.target.collection_id.value
    
    setFormData(Object.assign({}, formData, {image_url:image_url}))
    
    console.log(formData)

    const fetchObj = {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(formData)
    }

    fetch("http://localhost:3000/pictures", fetchObj)
      .then(resp => resp.json())
      .then(newPicture => {
        console.log(newPicture)
        

        const collectionPostObj = {
          method: "POST",
          headers: {
            "Content-Type":"application/json"
          },
          body: JSON.stringify({collection_id, picture_id: newPicture.id })
        }


        fetch("http://localhost:3000/picture_collections", collectionPostObj)
        .then(res => res.json())
        .then(() =>{

          const collectionsCopy = [...collections]
          const selectedId = collectionsCopy.findIndex(collection => collection.id == collection_id )
          const updatedCollection = collectionsCopy[selectedId]
          updatedCollection.pictures.push(newPicture)
          collectionsCopy[selectedId] = updatedCollection
          setCollections(collectionsCopy)
        
        })
      })

      history.push(`/collections/${collection_id}`)
    
  }

  const collectionOptions = collections.map(collection => {
    return <option value={collection.id}>{collection.name}</option>
  })
  
  return (
    <Form onSubmit={handleFormSubmit}>
      <br></br>
      <label for="name">Name:</label>
      <input onChange={handleFormChange} type="text" name="name" value={formData.name}></input><br></br>
      <br></br>
      <label for="description">Description:</label>
      <input onChange={handleFormChange} type="text" name="description" value={formData.description}></input><br></br>
      <br></br>
      <label for="collection">Add to collection:</label>
      <select onChange={handleFormChange} name="collection_id" id="collection">
        {collectionOptions}
      </select><br></br>
      <label for="isPublic">Make public?</label><br></br>
      <input onChange={handleFormChange} type="checkbox" name="isPublic" value={formData.isPublic}></input><br></br>
      <br></br>
      <input style={{background: 'purple', color: 'white', 'border-radius': '13px'}} type="submit" value="Save?"></input>
      <br></br>
      <br></br>
    </Form>

  )
}

export default SaveDrawingForm