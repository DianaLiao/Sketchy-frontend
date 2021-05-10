import { useHistory } from "react-router-dom";

function PictureCard(picture) {

    const history = useHistory()

    function sendToPictureShowPage() {
        history.push(`/pictures/${picture.id}`)
    }

    return(
        <>
        <img onClick={sendToPictureShowPage} src={picture.image_url} alt={picture.name} />
        </>
    )
}

export default PictureCard