// import logo from './logo.svg';
// import './App.css';
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
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

  // let userId = localStorage.user

  const [user, setUser] = useState({})
  const [isLoggedIn, setLoggedIn] = useState(user.name ? true : false)
  const [drawings, setDrawings] = useState([])
  const [collections, setCollections] = useState([])
  const [done, setDone] = useState(undefined)
  
  
  // useEffect(fetchUser, [])
  useEffect(fetchDrawings, [user])
  useEffect(fetchCollections, [user])
  
  console.log(user.id)

  function fetchDrawings() {
    fetch(`http://localhost:3000/users/${user.id}/pictures`)
    .then(res => res.json())
    .then(drawingArray => {
      setDrawings(drawingArray)
      setTimeout(() => setDone(true), 4000)
    })
  }
  
  function fetchCollections() {
    fetch(`http://localhost:3000/users/${user.id}/collections`)
    .then(res => res.json())
    .then(data => {
      console.log("collections", data)
      // console.log("userID", userId)
      console.log("user", user)
      setCollections(data)
    })
  }

  // function fetchUser(){
  //   fetch(`http://localhost:3000/users/${userId}`)
  //     .then(resp=>resp.json())
  //     .then(user => {
  //       setUser(user)
  //     })
  // }
  
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
        <Router>
          <NavMenu setLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn} />  

          <Switch>  
            <Route path="/login">
                <LoginPage setUser={setUser} setLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn} />
            </Route>
            <Route path="/new-drawing">
                {!isLoggedIn ? <Redirect to="/login"> </Redirect> : <CreateDrawing setCollections={setCollections} collections={collections} user={user}/>}
            </Route>
            <Route exact path="/collections">
              {!isLoggedIn ? <Redirect to="/login"> </Redirect> : <CollectionsIndex collections={collections}/>}
            </Route>
            <Route path="/collections/:id">
              {!isLoggedIn ? <Redirect to="/login"> </Redirect> : <CollectionShow updatePicture={updatePicture} collections={collections} />}
            </Route>
            <Route path="/pictures/:id">
              {!isLoggedIn ? <Redirect to="/login"> </Redirect> : <PictureShow updatePicture={updatePicture} drawings={drawings}/>}
            </Route>
            <Route exact path="/">
             {!isLoggedIn ? <Redirect to="/login"> </Redirect> : <Home pictures={drawings} user={user} />}
            </Route>
          </Switch>
        </Router>
      </main>
      </>}
    </div>
  )
}

export default App;
