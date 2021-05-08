import NavMenu from "./NavMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { useState } from "react"


function MainContainer() {


  return(
    <main>
      I am main.
      <NavMenu />
    </main>
  )
}

export default MainContainer