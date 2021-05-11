import { NavLink } from "react-router-dom"

function NavMenu({setLoggedIn}) {

  function logOut(){
    setLoggedIn(true)
    localStorage.setItem("user", "")
  }

  return(
    <nav>
        <NavLink className="" exact to="/">
          Home
        </NavLink>
        <NavLink className="" to="/new-drawing">
          Create New Drawing
        </NavLink>
        <NavLink className="" to="/collections">
          View Your Collections
        </NavLink>
        <span onClick={logOut}>
          Logout
        </span>
    </nav>
  )
}

export default NavMenu