import PictureCard from "./PictureCard"

function FavoriteBar({pictures}) {

// let favoritePictureElements = pictures.map( picture => <PictureCard key={picture.id} {...picture} /> )

    const favPicElements = pictures.map(pic => <img src={pic.image_url} alt={pic.name}></img>)
    return (
        <>
            <h1>FAVORITE BAR</h1>
            <div className="display-bar">
                {favPicElements}
            </div>
        </>
    )
}

export default FavoriteBar