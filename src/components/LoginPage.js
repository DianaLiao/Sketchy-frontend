import { useState } from "react"
import { useHistory } from "react-router-dom"

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
    // localStorage.setItem("user", userData.id)
  }


  return(
    <div>
      <h3>Existing User Login</h3>
      <form onSubmit={handleLoginSubmit}>
        <label for="login-email">E-mail:</label>
        <input onChange={(e)=>setLoginEmail(e.target.value)} value={loginEmail} type="text" id="login-email"></input><br/>
        <input type="submit" value="Login"></input>
      </form>
      <hr></hr>
      {errors !== "" && errors.map(error => {
        return <p>{error}</p>
      })}
      <hr></hr>
      <h3>New User Sign Up</h3>
      <form onSubmit={handleNewUserSubmit}>
        <label for="name">Name:</label>
        <input onChange={handleNewUserFormChange} value={newUserForm.name} type="text" id="name"></input><br/>
        <label for="email">E-mail:</label>
        <input onChange={handleNewUserFormChange} value={newUserForm.email} type="text" id="email"></input><br/>
        <input type="submit" value="Sign up!"></input>
      </form>
    </div>

  )
}

export default LoginPage