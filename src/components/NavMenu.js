import { NavLink } from "react-router-dom"
import { Menu} from 'semantic-ui-react'
import { useState } from "react"

function NavMenu({setLoggedIn, isLoggedIn}) {

  function logOut(){
    setLoggedIn(false)
    // localStorage.setItem("user", "")
  }

  const [activePage, setActive] = useState("/")

  function handleNavClick(event){
    console.dir(event)
    setActive(event.target.pathname)
    // console.log(activePage)
  }

  if (!isLoggedIn) {return null}

  return(
    <nav>
      <Menu pointing>
        <Menu.Item name="home" active={activePage === "/"} onClick={handleNavClick}>
          <NavLink className="" exact to="/">
            Home
          </NavLink>
        </Menu.Item> 
        <Menu.Item name="new-drawing" active={activePage === '/new-drawing'} onClick={handleNavClick}>
          <NavLink className="" to="/new-drawing">
            Create New Drawing
          </NavLink>
        </Menu.Item>
        <Menu.Item name="collections" active={activePage === '/collections'} onClick={handleNavClick}>
          <NavLink className="" to="/collections">
            View Your Collections
          </NavLink>
        </Menu.Item>
        <Menu.Item name="logout" active={activePage === 'logout'} onClick={handleNavClick}>
          <span onClick={logOut}>
            Logout
          </span>
        </Menu.Item>
      </Menu>
    </nav>
  )
}

export default NavMenu