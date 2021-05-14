import PictureCard from "./PictureCard"
import { useHistory } from "react-router-dom"


function PublicBar({pictures}) {

// let publicPictureElements = pictures.map( picture => <PictureCard key={picture.id} {...picture}/> )

    const history = useHistory()

    function sendToPictureShowPage(id) {
        history.push(`/pictures/${id}`)
    }

    const publicPicElements = pictures.map(pic => <img onClick={()=>sendToPictureShowPage(pic.id)} src={pic.image_url} alt={pic.name} key={pic.id}></img>)

    return (
        <>
            <h1 id="public-title">Public Drawings</h1>
            <div className="display-bar">
                {publicPicElements}
            </div>
        </>
    )
}

export default PublicBar