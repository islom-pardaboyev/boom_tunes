import { api } from ".";

export const getAlbumApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAlbum: builder.query({
            query: () => `browse/categories/toplists/playlists`,
        }),
    }),
})

export const { useGetAlbumQuery } = getAlbumApi;