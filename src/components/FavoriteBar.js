
function FavoriteBar({pictures}) {

let favoritePictureElements = pictures.map( picture => <img src={picture.test_image} alt={picture.name} /> )

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