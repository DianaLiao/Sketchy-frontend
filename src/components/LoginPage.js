import { useState } from "react"
import { useHistory } from "react-router-dom"
import { Button, Form } from 'semantic-ui-react'

function LoginPage({setLoggedIn, setUser, isLoggedIn}){

  const [loginEmail, setLoginEmail] = useState("")
  const [newUserForm, setNewUserForm] = useState({name:"", email:""})
  const [errors, setErrors] = useState("")

  const history = useHistory()
  console.log(isLoggedIn)

  function handleNewUserFormChange(event){

    setNewUserForm({...newUserForm, [event.target.id]:event.target.value})
  }
  
  function handleNewUserSubmit(event){
    event.preventDefault()

    const fetchObj = {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      }, 
      body: JSON.stringify(newUserForm)
    }
    
    fetch("http://localhost:3000/users", fetchObj)
      .then(resp => resp.json())
      .then(data => {
        if (Array.isArray(data)){
          return setErrors(data)
        }
        else {
          logInUser(data)
        }
      })
      .catch(console.error)
  }

  function handleLoginSubmit(event){
    event.preventDefault()

    const fetchObj = {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      }, 
      body: JSON.stringify({email: loginEmail})
    }

    fetch("http://localhost:3000/users/login", fetchObj)
      .then(resp => resp.json())
      .then(data => {
        if (Array.isArray(data)){
          return setErrors(data)
        }
        else {
          logInUser(data)
        }
      })
  }

  function logInUser(userData){
    console.log(userData)
    setErrors("")
    setUser(userData)
    setLoggedIn(true)
    history.push("/")
  }


  return(
    <div className="forms">
      <h3>Existing User Login</h3>
      <Form onSubmit={handleLoginSubmit}>
        <Form.Field>
          <label for="login-email">E-mail:</label>
          <input onChange={(e)=>setLoginEmail(e.target.value)} value={loginEmail} type="text" id="login-email"></input><br/>
        </Form.Field>
        <Button type="submit">Login</Button>
      </Form>
      <hr></hr>
      {errors !== "" && errors.map(error => {
        return <p>{error}</p>
      })}
      <hr></hr>
      <h3>New User Sign Up</h3>
      <Form onSubmit={handleNewUserSubmit}>
        <Form.Field>
          <label for="name">Name:</label>
          <input onChange={handleNewUserFormChange} value={newUserForm.name} type="text" id="name"></input><br/>
        </Form.Field>
        <Form.Field>
          <label for="email">E-mail:</label>
          <input onChange={handleNewUserFormChange} value={newUserForm.email} type="text" id="email"></input><br/>
        </Form.Field>
        <Button type="submit">Sign up!</Button>
      </Form>
    </div>

  )
}

export default LoginPage