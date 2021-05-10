import PictureCard from "./PictureCard"

function FavoriteBar({pictures}) {

let favoritePictureElements = pictures.map( picture => <PictureCard key={picture.id} {...picture} /> )

    return (
        <div>
            <h1>FAVORITE BAR</h1>
            <ul>
            {favoritePictureElements}
            </ul>
        </div>
    )
}

export default FavoriteBar