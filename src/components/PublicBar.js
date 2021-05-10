import PictureCard from "./PictureCard"

function PublicBar({pictures}) {
let publicPictureElements = pictures.map( picture => <PictureCard key={picture.id} {...picture}/> )

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