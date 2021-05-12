import CollectionPreviewCard from "./CollectionPreviewCard"

function CollectionsIndex({collections}){

  const collectionCards = collections.map(collection => {
    console.log(collection)
    return <CollectionPreviewCard key={collection.id} {...collection}/>
  })

  return (
    <div className="collection">
      {collectionCards}

    </div>
  )
}

export default CollectionsIndex