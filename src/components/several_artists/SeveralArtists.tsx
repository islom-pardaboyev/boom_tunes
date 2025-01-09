import { useNavigate } from "react-router-dom";
import { useGetSeveralArtistQuery } from "../../store/api/get-several-artist-api";
import { ArtistContext } from "../../utils";

function SeveralArtists() {
  const navigate = useNavigate()
    const { data: artists } = useGetSeveralArtistQuery(true) as {
        data: { artists: ArtistContext };
      };
  return (
    <div>
      <h1 className="text-white font-bold m-3">Artist</h1>
      <div className="grid grid-cols-1 gap-5 m-3">
        {artists &&
          artists.artists.map((artist, inx) => (
            <div onClick={() => navigate(`/artist/${artist.id}`)}
              key={inx}
              className="flex active:bg-zinc-800 cursor-pointer p-2 rounded-md items-center  gap-3"
            >
              <img
                src={artist.images[2].url}
                className="size-[70px] rounded-full"
                alt=""
              />
              <div className="flex flex-col">
                <h1 className="font-bold text-lg line-clamp-1">
                  {artist.name}
                </h1>
                <p className="text-sm text-zinc-500">
                  Followers: {artist.followers.total.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SeveralArtists;
