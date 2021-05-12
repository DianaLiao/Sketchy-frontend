import { NavLink } from "react-router-dom"

function NavMenu({setLoggedIn, isLoggedIn}) {

  function logOut(){
    setLoggedIn(false)
    // localStorage.setItem("user", "")
  }

  if (!isLoggedIn) {return null}

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