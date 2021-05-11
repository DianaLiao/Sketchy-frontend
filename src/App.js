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

function App() {

  const [user, setUser] = useState({name:""})
  const [notLoggedIn, setLoggedIn] = useState(localStorage.user === "" ? true : false)
  const [drawings, setDrawings] = useState([])
  const [collections, setCollections] = useState([])
  
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

  useEffect(fetchDrawings, [])
  
  function fetchDrawings() {
    fetch("http://localhost:3000/pictures")
    .then(res => res.json())
    .then(setDrawings)
  }

  useEffect(fetchCollections, [])
  
  function fetchCollections() {
    fetch("http://localhost:3000/collections")
    .then(res => res.json())
    .then(setCollections)
  }
  

  return (
    <div className="App">
      <Header />
      <main>
        {notLoggedIn ? <LoginPage setUser={setUser} setLoggedIn={setLoggedIn} notLoggedIn={notLoggedIn} /> : 
        <>
        <Router>
          <NavMenu setLoggedIn={setLoggedIn}/>  

          <Switch>  
            <Route path="/new-drawing">
                <CreateDrawing />
            </Route>
            <Route exact path="/collections">
              <CollectionsIndex />
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
    </div>
  )
}

export default App;
