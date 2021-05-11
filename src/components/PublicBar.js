import PictureCard from "./PictureCard"

function PublicBar({pictures}) {

// let publicPictureElements = pictures.map( picture => <PictureCard key={picture.id} {...picture}/> )

    const publicPicElements = pictures.map(pic => <img src={pic.image_url} alt={pic.name}></img>)

    return (
        <>
            <h1>PUBLIC BAR</h1>
            <div className="display-bar">
                {publicPicElements}
            </div>
        </>
    )
}

export default PublicBar