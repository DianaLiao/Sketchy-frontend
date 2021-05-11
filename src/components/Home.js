import FavoriteBar from "./FavoriteBar"
import PublicBar from "./PublicBar"

function Home({pictures, user}){


  return (
    <div className="home-view">
      <br></br>
      <span>Hi, {user.name}!</span><br></br>
      <span>You last logged in on May, 10th 2021.</span><br></br>
      <span>Hope you're ready to color!</span><br></br>

      <FavoriteBar pictures={pictures} />
      <br></br>
      <PublicBar pictures={pictures} />
    
      
    </div>
  )
}

export default Home