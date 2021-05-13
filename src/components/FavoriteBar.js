import PictureCard from "./PictureCard"
import { useHistory } from "react-router-dom"

function FavoriteBar({pictures}) {

// let favoritePictureElements = pictures.map( picture => <PictureCard key={picture.id} {...picture} /> )

    const history = useHistory()

    function sendToPictureShowPage(id) {
        history.push(`/pictures/${id}`)
    }

    const favPicElements = pictures.map(pic => <img onClick={()=>sendToPictureShowPage(pic.id)} src={pic.image_url} alt={pic.name} key={pic.id}></img>)
    return (
        <>
            <h1 id="favorite-title">FAVORITE BAR</h1>
            <div className="display-bar">
                {favPicElements}
            </div>
        </>
    )
}

export default FavoriteBar