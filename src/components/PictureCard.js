import { useHistory } from "react-router-dom";
import { Button, Card, Icon, Image } from "semantic-ui-react"

function PictureCard({picture, updatePicture}) {

    const history = useHistory()

    function sendToPictureShowPage() {
        history.push(`/pictures/${picture.id}`)
    }

    const {name, image_url, description, favorite, created_at, id} = picture

    return(
        <div onClick={sendToPictureShowPage} className="picture-card">
            <Card>
                <Image src={image_url} alt={name}/>
                <Card.Content>
                    <Card.Header>{name}</Card.Header>
                    <Card.Meta>Created {created_at.slice(0,10)}</Card.Meta>
                </Card.Content>
                <Card.Content extra>
                    <div className="ui three buttons">
                    <Button animated="fade" basic color="green" onClick={()=>updatePicture({favorite: !favorite}, id)}>
                        <Button.Content visible>⭐️</Button.Content>
                        <Button.Content hidden>{favorite ? "Remove from Favorites?" : "Favorite?"}</Button.Content>
                    </Button>
                    <Button animated="fade" basic color="yellow">
                        <Button.Content visible>👀</Button.Content>
                        <Button.Content hidden>Make Public?</Button.Content>
                    </Button>
                    <Button animated="fade" basic color="red">
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