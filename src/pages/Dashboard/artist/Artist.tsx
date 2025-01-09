import { Clock, MoveLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-node";
import { CLIENT_ID } from "../../../hooks/useEnv";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

function Artist() {
 
  const token = useSelector((state: RootState) => state.token.access_token);
  const navigate = useNavigate();
  const [artist, setArtist] = useState<SpotifyApi.ArtistObjectFull>();
  const [track, setTrack] = useState<SpotifyApi.TrackObjectFull[]>([]);
  const { id } = useParams();
  const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID,
  });
  useEffect(() => {
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    spotifyApi.getArtist(id as string).then((res) => {
      setArtist(res.body);
    });
    spotifyApi
      .getArtistTopTracks(id as string, "US")
      .then((res) => setTrack(res.body.tracks));
  }, [id]);
  return (
    <section className="section-style">
      <header>
        <p
          onClick={() => navigate(-1)}
          className="size-12 cursor-pointer bg-zinc-400/40 rounded-full flex items-center justify-center bg"
        >
          <MoveLeft />
        </p>
      </header>
      {artist && (
        <div className="mt-5">
          <div className="flex items-center gap-3">
            <img
              src={
                artist.images[1]?.url ||
                "https://dummyjson.com/image/200x200?text=Playlist"
              }
            />
            <div>
              <h1 className="text-7xl line-clamp-1 font-bold">{artist.name}</h1>
              <p>Songs: {track.length}</p>
            </div>
          </div>
          <div className="grid p-2 mt-5 grid-cols-4 text-xs items-center">
            <div className="flex items-center gap-2 ">
              <div className="flex items-center gap-2 text-zinc-200">
                <p>#</p>
                <p>Title</p>
              </div>
            </div>
            <h3 className="text-zinc-200">Album</h3>
            <p className="text-zinc-200">Date Added</p>
            <Clock className="size-3" />
          </div>
          <span className="block w-full h-px bg-white/50"></span>
          <div className="flex flex-col">
            {track.map((track, inx) => (
              <div
                onClick={() => {
                  const uri = track.uri;
                  if (uri) {
                    window.open(uri, "_blank");
                  } else {
                    alert("No preview available");
                  }
                }}
                key={inx}
                className="grid p-2 hover:bg-zinc-700/50 rounded-lg grid-cols-4 items-center"
              >
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 text-zinc-200">
                    <p>{inx + 1}</p>
                    <img
                      className="rounded-lg"
                      src={track?.album.images[2].url}
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm line-clamp-1">
                      {track.name}
                    </h3>
                    <p className="text-zinc-200 text-xs">
                      {track.artists[0].name}
                    </p>
                  </div>
                </div>
                <p className="font-bold">{track.album.name}</p>
                <p>{track.type}</p>
                <p>
                  {((track.duration_ms as number) / 60000)
                    .toFixed(2)
                    .split(".")
                    .join(":")}{" "}
                  min
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default Artist;
