import { useSelector } from "react-redux"
import { useGetAlbumQuery } from "../../../store/api/get-album-api"
import { RootState } from "../../../store"

function Home() {
  const {data = []} = useGetAlbumQuery(true)
  console.log(data)
  const token = useSelector((state:RootState) => state.token.access_token)
  console.log(token)
  return (
    <div>Home</div>
  )
}

export default Home