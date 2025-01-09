import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Playlist() {
  const { id } = useParams();
  useEffect(() => {

  }, [id])
  return <div className="section-style">

  </div>;
}

export default Playlist;
