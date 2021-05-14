import PictureCard from "./PictureCard"
import { useParams, useHistory } from "react-router-dom"
import { Button } from 'semantic-ui-react'


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
    <div className='collection-show'>
    <h2>{selectedCollection.name}</h2>
    <h3>Description: {selectedCollection.description}</h3>
    <Button inverted color="blue" onClick={e => {history.push('/new-drawing')}}> Add a Drawing! </Button>
    <br></br>
    <br></br>
    <p>Click The Drawing To See More Details!</p>
    </div>
    <div className="collection">
      {cardList}
    </div>
    <br></br>
    <div className='collection-show'>
    <Button inverted color="red" onClick={handleCollectionDeleteClick}> 🗑️ Send Collection To TrashBin </Button>
    </div>
    <br></br>
    <br></br>
    </>
    
  )
}

export default CollectionShow