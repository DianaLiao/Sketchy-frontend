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
      <Button style={{'margin-left':'12px'}} inverted color="green" onClick={handleCreateNewCollectionClick} >Create New Collection</Button>
      <div className="collection">
        {collectionCards}
      </div>
      <br></br>
      <br></br>
    </div>
  )
}

export default CollectionsIndex