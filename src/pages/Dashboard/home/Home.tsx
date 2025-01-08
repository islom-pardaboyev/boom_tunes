import { useGetAlbumQuery } from "../../../store/api/get-album-api";
import { AlbumContext } from "../../../utils";

function Home() {
  const { data } = useGetAlbumQuery(true) as {
    data: { albums: AlbumContext };
  };
  console.log(data);
  return (
    <main className="w-full h-screen overflow-x-auto text-white grid grid-cols-5">
      <aside className="border-r-2 border-white bg-black">
        <h1 className="text-white font-bold m-3">Albums</h1>
        <div className="grid grid-cols-1">
          {data && data.albums.map((album, inx) => <div key={inx} className="">
            {album.name}
            <img src={album.images[2].url} alt="" />
          </div>)}
        </div>
      </aside>
      <div className="col-span-4"></div>
    </main>
  );
}

export default Home;
