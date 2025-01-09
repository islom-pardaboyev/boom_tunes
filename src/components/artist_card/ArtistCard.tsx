import { useNavigate } from "react-router-dom";

function ArtistCard(artist: SpotifyApi.ArtistObjectFull) {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/artist/${artist.id}`)} className="min-w-[10vw] bg-zinc-700 p-3 rounded-md">
      <img
        className="rounded-full object-cover w-[8vw] h-[8vw]"
        src={
          artist.images[1]?.url ||
          `https://dummyjson.com/image/200x200?text=Artist`
        }
        alt="Artist Image"
      />
      <p className="text-center font-bold mt-5 line-clamp-1">{artist.name}</p>
    </div>
  );
}

export default ArtistCard;
