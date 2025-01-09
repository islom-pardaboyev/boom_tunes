import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-node";
import { CLIENT_ID } from "../../../hooks/useEnv";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { Clock, MoveLeft } from "lucide-react";

function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

function Playlist() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [playlist, setPlaylist] = useState<SpotifyApi.PlaylistObjectFull>();
  const token = useSelector((state: RootState) => state.token.access_token);
  const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID,
  });

  useEffect(() => {
    if (token) {
      spotifyApi.setAccessToken(token);
    }
  }, [id]);

  useEffect(() => {
    spotifyApi.getPlaylist(id as string).then((res) => {
      setPlaylist(res.body);
    });
  }, [id]);
  console.log(playlist);
  return (
    <section className="section-style ">
      <header>
        <p
          onClick={() => navigate(-1)}
          className="size-12 cursor-pointer bg-zinc-400/40 rounded-full flex items-center justify-center bg"
        >
          <MoveLeft />
        </p>
      </header>
      {playlist && (
        <div className="mt-5">
          <div className="flex items-center gap-3">
            <img
              src={
                playlist.images[1]?.url ||
                "https://dummyjson.com/image/200x200?text=Playlist"
              }
            />
            <div>
              <h1 className="text-7xl line-clamp-1 font-bold">
                {playlist.name}
              </h1>
              <p>{playlist.description}</p>
              <p>Tracks: {playlist.tracks.total.toLocaleString()}</p>
              <p>
                Made from <b>{playlist.owner.display_name}</b>
              </p>
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
            {playlist.tracks.items.map((track, inx) => (
              <div
                onClick={() => {
                  const uri = track.track?.uri;
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
                      src={track.track?.album.images[2].url}
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm line-clamp-1">
                      {track.track?.name}
                    </h3>
                    <p className="text-zinc-200 text-xs">
                      {track.track?.artists[0].name}
                    </p>
                  </div>
                </div>
                <p className="font-bold">{track.track?.album.name}</p>
                <p>{formatDate(track.added_at)}</p>
                <p>
                  {((track.track?.duration_ms as number) / 60000)
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
export default Playlist;
