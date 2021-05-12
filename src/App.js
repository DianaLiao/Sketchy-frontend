// import logo from './logo.svg';
// import './App.css';
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import CollectionShow from "./components/CollectionShow";
import CollectionsIndex from "./components/CollectionsIndex";
import CreateDrawing from "./components/CreateDrawing";
import PictureShow from "./components/PictureShow";
import Header from "./components/Header";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
// import MainContainer from "./components/MainContainer";
import NavMenu from "./components/NavMenu";
import PreLoader1 from "./components/PreLoader1"

function App() {

  let userId = localStorage.user

  const [user, setUser] = useState({name:""})
  const [notLoggedIn, setLoggedIn] = useState(userId ==="" ? true : false)
  const [drawings, setDrawings] = useState([])
  const [collections, setCollections] = useState([])
  const [done, setDone] = useState(undefined)
  
  
  useEffect(fetchUser, [userId])
  useEffect(fetchDrawings, [])
  useEffect(fetchCollections, [])
  
  function fetchDrawings() {
    fetch(`http://localhost:3000/users/${userId}/pictures`)
    .then(res => res.json())
    .then(drawingArray => {
      setDrawings(drawingArray)
      setTimeout(() => setDone(true), 4000)
    })
  }
  
  function fetchCollections() {
    fetch(`http://localhost:3000/users/${userId}/collections`)
    .then(res => res.json())
    .then(data => {
      console.log("collections", data)
      console.log("userID", userId)
      console.log("user", user)
      setCollections(data)
    })
  }

  function fetchUser(){
    fetch(`http://localhost:3000/users/${userId}`)
      .then(resp=>resp.json())
      .then(user => {
        setUser(user)
      })
  }
  
  function updatePicture(formData, id) {
     fetch(`http://localhost:3000/pictures/${id}`,{
       method: "PATCH",
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify(formData)
     })
     .then(res => res.json())
     .then(console.log)
  }



  
  return (
    <div className="App">
      { !done ? <PreLoader1 /> : <>
      <Header />
      <main>
        {notLoggedIn ? <LoginPage setUser={setUser} setLoggedIn={setLoggedIn} notLoggedIn={notLoggedIn} /> : 
        <>
        <Router>
          <NavMenu setLoggedIn={setLoggedIn}/>  

          <Switch>  
            <Route path="/new-drawing">
                <CreateDrawing collections={collections} user={user}/>
            </Route>
            <Route exact path="/collections">
              <CollectionsIndex collections={collections}/>
            </Route>
            <Route path="/collections/:id">
              <CollectionShow updatePicture={updatePicture} pictures={drawings} />
            </Route>
            <Route path="/pictures/:id">
              <PictureShow updatePicture={updatePicture} drawings={drawings}/>
            </Route>
            <Route exact path="/">
              <Home pictures={drawings} user={user} />
            </Route>
          </Switch>
        </Router>
        </>
        } 
      </main>
      </>}
    </div>
  )
}

export default App;
