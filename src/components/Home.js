import FavoriteBar from "./FavoriteBar"
import PublicBar from "./PublicBar"
import { useState, useEffect } from "react"

function Home({pictures, user}){

  const [publicPics, setPublicPics] = useState([])


  useEffect(() => {
    fetch("http://localhost:3000/pictures/public")
      .then(resp => resp.json())
      .then(setPublicPics)
  }, [])

  return (
    <div className="home-view">
      <br></br>
      <span>Hi, <b>{user.name}</b>!</span><br></br>
      <span>Hope you're ready to color!</span><br></br>

      <FavoriteBar pictures={pictures} />
      <br></br>
      <PublicBar pictures={publicPics} />
      <br></br>
      <br></br>
      
    </div>
  )
}

export default Home