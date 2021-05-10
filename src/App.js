// import logo from './logo.svg';
// import './App.css';
import { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import CollectionShow from "./components/CollectionShow";
import CollectionsIndex from "./components/CollectionsIndex";
import CreateDrawing from "./components/CreateDrawing";
import DrawingShow from "./components/DrawingShow";
import Header from "./components/Header";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
// import MainContainer from "./components/MainContainer";
import NavMenu from "./components/NavMenu";
import { CanvasProvider } from "./components/CanvasContext"

function App() {

  const [notLoggedIn, setLoggedIn] = useState(false)

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
              <CanvasProvider>
                <CreateDrawing />
              </CanvasProvider>
            </Route>
            <Route exact path="/collections">
              <CollectionsIndex />
            </Route>
            <Route path="/collections/:id">
              <CollectionShow />
            </Route>
            <Route path="/drawings/:id">
              <DrawingShow />
            </Route>
            <Route exact path="/">
              <Home />
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
