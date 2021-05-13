import { useHistory } from "react-router-dom";
import { Button, Card, Icon, Image } from "semantic-ui-react"
import {useState} from "react"

function PictureCard({picture, updatePicture, collectionId, handlePictureCardDeletion}) {


   
    const history = useHistory()

    function sendToPictureShowPage() {
        history.push(`/pictures/${picture.id}`)
    }

    const {name, image_url, description, favorite, created_at, id, isPublic} = picture
    const [isFavorite, setIsFavorite] = useState(favorite)
    const [isPublicCardValue, setIsPublicCardValue] = useState(isPublic)
    console.log("isPublicStateVariable", isPublicCardValue)

    return(
        <div  className="picture-card">
            <Card>
                <Image onClick={sendToPictureShowPage} src={image_url} alt={name}/>
                <Card.Content>
                    <Card.Header>{name}</Card.Header>
                    <Card.Meta>Created {created_at.slice(0,10)}</Card.Meta>
                </Card.Content>
                <Card.Content extra>
                    <div className="ui three buttons">
                    <Button animated="fade" basic color="green" onClick={()=>{
                        updatePicture({favorite: !isFavorite}, id, collectionId)
                        setIsFavorite(!isFavorite)}}>
                        <Button.Content visible>{isFavorite ? "⭐️ ": "☆"}</Button.Content>
                        <Button.Content hidden>{isFavorite ? "Remove from Favorites" : "Add To Favorites"}</Button.Content>
                    </Button>
                    <Button animated="fade" basic color="yellow" onClick={()=>{
                        updatePicture({isPublic: !isPublicCardValue}, id, collectionId)
                        setIsPublicCardValue(!isPublicCardValue)}}>
                        <Button.Content visible>{isPublicCardValue ? "👀": "😌"}</Button.Content>
                        <Button.Content hidden>{isPublicCardValue? "Make Private" : "Make Public"}</Button.Content>
                    </Button>
                    <Button animated="fade" basic color="red" onClick={()=>{
                        handlePictureCardDeletion(id, collectionId)
                    }}>
                        <Button.Content visible>🗑</Button.Content>
                        <Button.Content hidden>Delete?</Button.Content>
                    </Button>
                    </div>
                </Card.Content>
            </Card>
        </div>
    )
}

export default PictureCard