import { useGetAlbumQuery } from "../../../store/api/get-several-albums-api";
import { useGetSeveralArtistQuery } from "../../../store/api/get-several-artist-api";
import { AlbumContext, ArtistContext } from "../../../utils";

function Home() {
  const { data: albums } = useGetAlbumQuery(true) as {
    data: { albums: AlbumContext };
  };
  const { data: artists } = useGetSeveralArtistQuery(true) as {
    data: { artists: ArtistContext };
  };

  console.log(artists);
  return (
    <main className="w-full h-screen overflow-x-auto text-white grid grid-cols-5">
      <aside className="border-r-2 border-white flex flex-col gap-5 overflow-y-auto bg-black">
        <div>
          <h1 className="text-white font-bold m-3">Albums</h1>
          <div className="grid grid-cols-1 gap-5 m-3">
            {albums &&
              albums.albums.map((album, inx) => (
                <div
                  key={inx}
                  className="flex p-2 rounded-md items-center  gap-3"
                >
                  <img src={album.images[2].url} alt="" />
                  <div className="flex flex-col">
                    <h1 className="font-bold text-lg">{album.name}</h1>
                    <p className="text-sm text-zinc-500">{album.label}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div>
          <h1 className="text-white font-bold m-3">Artist</h1>
          <div className="grid grid-cols-1 gap-5 m-3">
            {artists &&
              artists.artists.map((artist, inx) => (
                <div
                  key={inx}
                  className="flex p-2 rounded-md items-center  gap-3"
                >
                  <img src={artist.images[2].url} className="size-[70px] rounded-full" alt="" />
                  <div className="flex flex-col">
                    <h1 className="font-bold text-lg">{artist.name}</h1>
                    <p className="text-sm text-zinc-500">{artist.followers.total.toLocaleString()}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </aside>
      <div className="col-span-4"></div>
    </main>
  );
}

export default Home;
