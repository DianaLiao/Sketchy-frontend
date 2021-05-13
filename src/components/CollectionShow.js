import PictureCard from "./PictureCard"
import { useParams, useHistory } from "react-router-dom"


function CollectionShow({collections, updatePicture, handlePictureCardDeletion, handleCollectionDeleteRender}){

  const params = useParams()

  const selectedCollection = collections.find(collection => collection.id == params.id)

  const history = useHistory()

  const cardList = selectedCollection.pictures.map(picture => {
    return <PictureCard handlePictureCardDeletion={handlePictureCardDeletion} collectionId={params.id} key={picture.id} picture={picture} updatePicture={updatePicture}/>
  })

  function handleCollectionDeleteClick() {
    fetch(`http://localhost:3000/collections/${selectedCollection.id}`, {method: 'DELETE'})
      .then(console.log)

      handleCollectionDeleteRender(selectedCollection.id)
      history.push('/collections')
  }

  return (
    <>
    <h2>{selectedCollection.name}</h2>
    <h3>Description: {selectedCollection.description}</h3>
    <p>Click The Drawing To See More Details!</p>
    <div className="collection">
      {cardList}
    </div>
    <button onClick={handleCollectionDeleteClick}>🗑️ Send Collection To TrashBin</button>
    </>
  )
}

export default CollectionShow