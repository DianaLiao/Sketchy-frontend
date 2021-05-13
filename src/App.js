// import logo from './logo.svg';
// import './App.css';
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from "react-router-dom"
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
import NewCollectionForm from "./components/NewCollectionForm"

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
  
  function updatePicture(formData, pictureId, collectionId) {
     fetch(`http://localhost:3000/pictures/${pictureId}`,{
       method: "PATCH",
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify(formData)
     })
     .then(res => res.json())
     .then(updatedDrawingObject => {
      console.log("updatedDrawingObject", updatedDrawingObject)


      const collectionsCopy = [...collections]
      const selectedIndex = collectionsCopy.findIndex(collection => collection.id == collectionId )
      const updatedCollection = collectionsCopy[selectedIndex]
      const selectedPicIndex = updatedCollection.pictures.findIndex(picture => picture.id == pictureId )
      updatedCollection.pictures[selectedPicIndex] = updatedDrawingObject
      collectionsCopy[selectedIndex] = updatedCollection
      setCollections(collectionsCopy)
     
     })
  }

  function handlePictureCardDeletion(pictureId, collectionId) {
    console.log("pictureId",pictureId,"collectionId",collectionId)

    fetch(`http://localhost:3000/pictures/${pictureId}`, {method: 'DELETE'})
      .then(console.log)
      .then(_ => {
        const collectionsCopy = [...collections]
        const selectedCollectionIndex = collectionsCopy.findIndex(collection => collection.id == collectionId)
        const updatedCollection = collectionsCopy[selectedCollectionIndex]
        const selectedPicIndex = updatedCollection.pictures.findIndex(picture => picture.id == pictureId)
        updatedCollection.pictures.splice(selectedPicIndex,1)
        collectionsCopy[selectedCollectionIndex] = updatedCollection
        setCollections(collectionsCopy)
      })
  }

  function handleCollectionFormSubmit(event, newCollectionFormData) {
    event.preventDefault()
    console.log(newCollectionFormData)
    fetch(`http://localhost:3000/collections`, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newCollectionFormData)
    })
    .then(res => res.json())
    .then(newCollectionObject => {
      const newArray = [...collections, newCollectionObject]
      setCollections(newArray)
    })
  }

  function handleCollectionDeleteRender(collectionId) {
    const newArrayAfterDeletion = collections.filter( collection => collection.id !== collectionId)
    setCollections(newArrayAfterDeletion)
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
              {!isLoggedIn ? <Redirect to="/login"> </Redirect> : <CollectionShow handleCollectionDeleteRender={handleCollectionDeleteRender} handlePictureCardDeletion={handlePictureCardDeletion} updatePicture={updatePicture} collections={collections} />}
            </Route>
            <Route path="/pictures/:id">
              {!isLoggedIn ? <Redirect to="/login"> </Redirect> : <PictureShow updatePicture={updatePicture} drawings={drawings}/>}
            </Route>
            <Route exact path="/new-collection">
              {!isLoggedIn ? <Redirect to="/login"> </Redirect> : <NewCollectionForm user={user} handleCollectionFormSubmit={handleCollectionFormSubmit} />}
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
