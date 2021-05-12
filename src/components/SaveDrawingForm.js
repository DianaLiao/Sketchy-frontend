import {useCanvas} from "./CanvasContext"
import {useState} from "react"

function SaveDrawingForm({collections, user, setCollections}) {

  const {saveCanvas} = useCanvas()
  
  const blankForm = {name:"", description:"", public:false, image_url:"", collection_id:"", user_id:user.id}
  const [formData, setFormData] = useState(blankForm)

  const userId = user.id 

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
          body: JSON.stringify({collection_id: event.target.collection_id.value, picture_id: newPicture.id })
        }


        fetch("http://localhost:3000/picture_collections", collectionPostObj)
        .then(res => res.json())
        .then(() =>{
        //   let collectionsCopy = [...collections]
        // const specificCollection = collectionsCopy.find( collection => collection.id == event.target.collection_id.value)
      
        // specificCollection.pictures.push(newPicture)
        // let filteredCollection = collectionsCopy.filter( collection => collection.id != event.target.collection_id.value)
        // filteredCollection.push(specificCollection)
        // setCollections(filteredCollection)

        
        })
      })

      
    
  }

  const collectionOptions = collections.map(collection => {
    return <option value={collection.id}>{collection.name}</option>
  })
  
  return (
    <form onSubmit={handleFormSubmit}>
      <label for="name">Name:</label>
      <input onChange={handleFormChange} type="text" name="name" value={formData.name}></input><br></br>
      <label for="description">Description:</label>
      <input onChange={handleFormChange} type="text" name="description" value={formData.description}></input><br></br>
      <select onChange={handleFormChange} name="collection_id" id="collection">
        {collectionOptions}
      </select>
      <label for="isPublic">Make public?</label>
      <input onChange={handleFormChange} type="checkbox" name="isPublic" value={formData.isPublic}></input>
      <input type="submit" value="Save?"></input>
    </form>

  )
}

export default SaveDrawingForm