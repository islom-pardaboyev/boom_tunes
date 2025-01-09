function PlaylistCard(playlist: SpotifyApi.PlaylistObjectSimplified) {
  return (
    <div className="min-w-[10vw] bg-zinc-700 p-3 rounded-md">
      <img
        className="rounded-full object-cover w-[8vw] h-[8vw]"
        src={
          playlist.images[1]?.url ||
          "https://dummyjson.com/image/200x200?text=Playlist"
        }
        alt="Artist Image"
      />
      <p className="text-center font-bold mt-5 line-clamp-1">{playlist.name}</p>
    </div>
  );
}

export default PlaylistCard;
