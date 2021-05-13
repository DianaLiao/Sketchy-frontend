import CollectionPreviewCard from "./CollectionPreviewCard"
import { useHistory } from "react-router-dom"

function CollectionsIndex({collections, createNewCollection}){

  const history = useHistory()

  const collectionCards = collections.map(collection => {
    console.log(collection)
    return <CollectionPreviewCard key={collection.id} {...collection}/>
  })

  function handleCreateNewCollectionClick() {
      history.push('/new-collection')
  }

  return (
    <>
    <h1>Your Collections</h1>
    <button onClick={handleCreateNewCollectionClick} >Create New Collection</button>
    <div className="collection">
      {collectionCards}
    </div>
    </>
  )
}

export default CollectionsIndex