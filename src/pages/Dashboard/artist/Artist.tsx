import { useParams } from "react-router-dom"

function Artist() {
    const {id} = useParams()
  return (
    <div className="section-style">Artist</div>
  )
}

export default Artist