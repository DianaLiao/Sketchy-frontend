import {useState} from "react"
import {useHistory} from "react-router-dom"
import { Button, Form } from 'semantic-ui-react'

function NewCollectionForm({user, handleCollectionFormSubmit}) {
const [newCollectionFormData, setNewCollectionFormData] = useState({
    name: "",
    description: "",
    user_id: ""
})

const history = useHistory()

    function handleFormChange(event){
        const property = event.target.name
        let value = event.target.value
    
        setNewCollectionFormData({...newCollectionFormData, [property]:value, user_id: user.id })
      }

      function navigateToFunction() {
        setTimeout(history.push('/collections'),2000)
      }

    return(
        <>
        <div className="new-collection-form">
        <h1>New Collection Form</h1>
        <Form onSubmit={event => {
            handleCollectionFormSubmit(event, newCollectionFormData)
            navigateToFunction()}}> 
        <input onChange={handleFormChange} type="text" name="name" placeholder="Collection Name" value={newCollectionFormData.name}></input><br></br>
        <textarea onChange={handleFormChange} name="description" placeholder="Description" rows="15" cols="40" value={newCollectionFormData.description}></textarea><br></br>
        <input style={{'margin-left': '6px', background: 'purple', color: 'white', 'border-radius': '13px'}} type="submit" value="Create New Collection"></input>
      </Form>
      </div>
        </>

    )}

export default NewCollectionForm 
    
