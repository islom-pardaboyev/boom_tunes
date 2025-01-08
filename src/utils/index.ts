export type AlbumContext = {
  album_type: string;
  artists: {
    external_urls: { spotify: string };
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }[];
  available_markets: string[];
  copyrights: { text: string; type: string }[];
  images: {
    height: number;
    url: string;
    width: number;
  }[];
  label: string;
  name: string;
  popularity: number;
  release_date: string;
  total_tracks: number;
  tracks: {
    href: string;
    items: {
      artists: {
        external_urls: { spotify: string };
        href: string;
        id: string;
        name: string;
        type: string;
        uri: string;
      }[];
      duration_ms: number;
      id: string;
      name: string;
      type: string;
      uri: string;
    }[];
  };
  type: string;
}[];
