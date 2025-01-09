import SeveralAlbums from "../several_albums/SeveralAlbums";
import SeveralArtists from "../several_artists/SeveralArtists";

function Sidebar() {
  return (
    <aside className="flex flex-col gap-5 overflow-y-auto text-white bg-black">
      <SeveralAlbums />
      <SeveralArtists />
    </aside>
  );
}

export default Sidebar;
