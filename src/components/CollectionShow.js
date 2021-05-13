import PictureCard from "./PictureCard"
import { useParams } from "react-router-dom"


function CollectionShow({collections, updatePicture, handlePictureCardDeletion}){

  const params = useParams()

  const selectedCollection = collections.find(collection => collection.id == params.id)

  const cardList = selectedCollection.pictures.map(picture => {
    return <PictureCard handlePictureCardDeletion={handlePictureCardDeletion} collectionId={params.id} key={picture.id} picture={picture} updatePicture={updatePicture}/>
  })

  return (
    <>
    <h2>{selectedCollection.name}</h2>
    <h3>Description: {selectedCollection.description}</h3>
    <p>Click The Drawing To See More Details!</p>
    <div className="collection">
      {cardList}
    </div>
    </>
  )
}

export default CollectionShow