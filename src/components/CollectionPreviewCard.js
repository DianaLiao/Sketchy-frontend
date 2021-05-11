import { useHistory } from "react-router-dom";
import { Button, Card, Icon, Image } from "semantic-ui-react"

function CollectionPreviewCard(collection) {

    const history = useHistory()

    function sendToCollectionShowPage() {
        history.push(`/collections/${collection.id}`)
    }

    const {name, description, pictures} = collection
    const firstPic = pictures[0] || {image_url: "./400x400-image.jpeg", name: "placeholder"}  

    return(
        <div onClick={sendToCollectionShowPage} className="collection-card">
            <Card>
                <Image src={firstPic.image_url} alt={firstPic.name}/>
                <Card.Content>
                    <Card.Header>{name}</Card.Header>
                    <Card.Meta>{description}}</Card.Meta>
                </Card.Content>
            </Card>
        </div>
    )
}

export default CollectionPreviewCard