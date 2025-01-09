import { Search } from "lucide-react";
import SpotifyWebApi from "spotify-web-api-node";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { CLIENT_ID } from "../../../hooks/useEnv";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import ArtistCard from "../../../components/artist_card/ArtistCard";
import PlaylistCard from "../../../components/playlist_card/PlaylistCard";
import TrackCard from "../../../components/track_card/TrackCard";
function Home() {
  const token = useSelector((state: RootState) => state.token.access_token);
  const [searchedText, setSearchedText] = useState<string>();
  const [playlists, setPlaylists] = useState<
    SpotifyApi.PlaylistObjectSimplified[]
  >([]);
  const [albums, setAlbums] = useState<SpotifyApi.AlbumObjectSimplified[]>([]);
  const [artists, setArtists] = useState<SpotifyApi.ArtistObjectFull[]>([]);
  const [tracks, setTracks] = useState<SpotifyApi.TrackObjectFull[]>([]);
  const [episode, setEpisode] = useState<SpotifyApi.EpisodeObjectSimplified[]>(
    []
  );

  const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID,
  });
  useEffect(() => {
    if (token) {
      spotifyApi.setAccessToken(token);
    }
  }, [searchedText]);
  useEffect(() => {
    if (searchedText) {
      spotifyApi.searchPlaylists(searchedText).then((res) => {
        if (res.body.playlists) {
          setPlaylists(res.body.playlists.items);
        }
      });
      spotifyApi.searchAlbums(searchedText).then((res) => {
        if (res.body.albums) {
          setAlbums(res.body.albums.items);
        }
      });
      spotifyApi.searchArtists(searchedText).then((res) => {
        if (res.body.artists) {
          setArtists(res.body.artists.items);
        }
      });
      spotifyApi.searchTracks(searchedText).then((res) => {
        if (res.body.tracks) {
          setTracks(res.body.tracks.items);
        }
      });
      spotifyApi.searchEpisodes(searchedText).then((res) => {
        if (res.body.episodes) {
          setEpisode(res.body.episodes.items);
        }
      });
    }
  }, [searchedText]);

  type formValues = {
    text: string;
  };
  window.addEventListener("offline", () => {
    if (!document.getElementById("offlineDiv")) {
      const offlineDiv = document.createElement("div");
      offlineDiv.id = "offlineDiv";
      offlineDiv.className =
        "fixed top-0 left-0 flex font-bold flex-col items-center justify-center duration-300 w-full h-full bg-black";

      const offlineImg = document.createElement("img");
      offlineImg.src = "/offline-img.png";

      const message = document.createElement("p");
      message.style.color = "white";
      message.style.fontSize = "4rem";
      message.textContent = "You are offline";

      const subMessage = document.createElement("p");
      subMessage.style.color = "#4C585B";
      subMessage.textContent = "Please make sure you are online";

      offlineDiv.appendChild(offlineImg);
      offlineDiv.appendChild(message);
      offlineDiv.appendChild(subMessage);

      document.body.appendChild(offlineDiv);
    }
    window.addEventListener("online", () => {
      const offlineDiv = document.getElementById("offlineDiv");
      if (offlineDiv) {
        offlineDiv.remove();
      }
    });
  });
  console.log(playlists);
  const { register, handleSubmit } = useForm<formValues>();
  const formSubmit = (data: formValues) => {
    setSearchedText(data.text);
  };
  return (
    <div className="section-style">
      <form
        onSubmit={handleSubmit(formSubmit)}
        action=""
        className="flex items-center bg-black gap-3 p-3 rounded-full"
      >
        <Search />
        <input
          {...register("text")}
          type="text"
          placeholder="Search..."
          className="outline-none bg-transparent rounded-md w-full"
        />
      </form>
      {searchedText && artists && (
        <div className="mt-5">
          <p className="font-bold text-lg mb-3">Artists</p>
          <div className="flex items-center gap-5 overflow-y-auto">
            {artists.map((artist, inx) => (
              <ArtistCard key={inx} {...artist} />
            ))}
          </div>
        </div>
      )}
      {searchedText && playlists && (
        <div className="mt-5">
          <p className="font-bold text-lg mb-3">Playlists</p>
          <div className="flex items-center gap-5 overflow-y-auto">
            {playlists
              .filter((item) => item)
              .map((playlist, inx) => (
                <PlaylistCard key={inx} {...playlist} />
              ))}
          </div>
        </div>
      )}
      {searchedText && tracks && (
        <div className="mt-5">
          <p className="font-bold text-lg mb-3">Tracks</p>
          <div className="flex items-center gap-5 overflow-y-auto">
            {tracks.map((track, inx) => (
              <TrackCard key={inx} {...track} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
