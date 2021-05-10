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

  const [notLoggedIn, setLoggedIn] = useState(false)
  const [drawings, setDrawings] = useState([])
  const [collections, setCollections] = useState([])

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
        {notLoggedIn ? <LoginPage /> : 
        <>
        <Router>
          <NavMenu />  

          <Switch>  
            <Route path="/new-drawing">
                <CreateDrawing />
            </Route>
            <Route exact path="/collections">
              <CollectionsIndex />
            </Route>
            <Route path="/collections/:id">
              <CollectionShow />
            </Route>
            <Route path="/pictures/:id">
              <PictureShow />
            </Route>
            <Route exact path="/">
              <Home pictures={drawings} />
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
