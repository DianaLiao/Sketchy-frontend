import CollectionPreviewCard from "./CollectionPreviewCard"
import { useHistory } from "react-router-dom"
import { Button } from 'semantic-ui-react'

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
    <div className="collection-index">
      <h1>Your Collections</h1>
      <Button inverted color="violet" onClick={handleCreateNewCollectionClick} >Create New Collection</Button>
      <div className="collection">
        {collectionCards}
      </div>
    </div>
  )
}

export default CollectionsIndex