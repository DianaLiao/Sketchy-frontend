import PictureCard from "./PictureCard"
import { useParams } from "react-router-dom"


function CollectionShow({collections, updatePicture}){

  const params = useParams()

  const selectedCollection = collections.find(collection => collection.id == params.id)

  const cardList = selectedCollection.pictures.map(picture => {
    return <PictureCard key={picture.id} picture={picture} updatePicture={updatePicture}/>
  })

  return (
    <>
    <h5>Name and description will eventually go here</h5>
    <div className="collection">
      {cardList}
    </div>
    </>
  )
}

export default CollectionShow