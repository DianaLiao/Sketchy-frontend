import {useState} from "react"

function NewCollectionForm() {
const [newCollectionFormData, setNetCollectionFormData] = useState({})

    // function handleFormChange(event){
    //     const property = event.target.name
    //     let value = event.target.value
    
    //     const image_url = saveCanvas()
    
    //     if (event.target.type === "checkbox") {
    //       value = event.target.checked;
    //     }
    
    //     setFormData({...formData, [property]:value, image_url})
    //   }

    return(
        <>
        <h1>New Collection Form</h1>
        {/* <form onSubmit={handleFormSubmit}>
        <input onChange={handleFormChange} type="text" name="name" placeholder={name} value={updatePictureFormData.name}></input><br></br>
        <textarea onChange={handleFormChange} name="description" placeholder={description} rows="15" cols="40" value={updatePictureFormData.description}></textarea><br></br>
        <input onChange={handleFormChange} id="isPublic" type="checkbox" name="isPublic" value={updatePictureFormData.isPublic}></input>
        <label for="isPublic">Mark as public?</label><br></br>
        <input type="submit" value="Update This Drawing"></input> */}
      {/* </form> */}
        </>

    )}

export default NewCollectionForm 
    
