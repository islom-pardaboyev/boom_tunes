import { AlbumContext } from "../../utils";
import { useGetAlbumQuery } from "../../store/api/get-several-albums-api";

function SeveralAlbums() {
    const { data: albums } = useGetAlbumQuery(true) as {
        data: { albums: AlbumContext };
      };
  return (
    <div>
      <h1 className="text-white font-bold m-3">Albums</h1>
      <div className="grid grid-cols-1 gap-5 m-3">
        {albums &&
          albums.albums.map((album, inx) => (
            <div
              key={inx}
              className="flex p-2 active:bg-zinc-800 cursor-pointer rounded-md items-center  gap-3"
            >
              <img src={album.images[2].url} alt="" />
              <div className="flex flex-col">
                <h1 className="font-bold text-lg line-clamp-1">{album.name}</h1>
                <p className="text-sm text-zinc-500">{album.label}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SeveralAlbums;
