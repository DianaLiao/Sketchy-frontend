import { useParams } from "react-router-dom"

function PictureShow({drawings}){
  
  const params = useParams()
  const selectedDrawing = drawings.find( drawing => {
    return drawing.id === parseInt(params.id)
  })

  const {name, favorite, description, image_url} = selectedDrawing

  return (
    <div>
      <h1>{name}</h1>
      <img src={image_url} alt={name} />
      <h3>Description:</h3>
      <p>
        {description}
      </p>
    </div>
  )
}

export default PictureShow