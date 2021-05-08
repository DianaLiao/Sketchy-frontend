import { NavLink } from "react-router-dom"

function NavMenu() {

  return(
    <nav>
        <NavLink className="" exact to="/">
          Home
        </NavLink>
        <NavLink className="" to="/new-drawing">
          Create New Drawing
        </NavLink>
        <NavLink className="" to="/collections">
          View Past Collections
        </NavLink>
    </nav>
  )
}

export default NavMenu