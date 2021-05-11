import PictureCard from "./PictureCard"


function CollectionShow({pictures}){

  console.log(pictures)

  const cardList = pictures.map(picture => {
    return <PictureCard key={picture.id} {...picture}/>
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