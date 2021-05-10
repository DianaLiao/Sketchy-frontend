

function PublicBar({pictures}) {
let publicPictureElements = pictures.map( picture => <img src={picture.test_image} alt={picture.name} /> )

    return (
        <div>
            <h1>PUBLIC BAR</h1>
            <ul>
            {publicPictureElements}
            </ul>
        </div>
    )
}

export default PublicBar