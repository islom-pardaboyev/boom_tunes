import { api } from ".";

export const getAlbumApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAlbum: builder.query({
      query: () =>
        `albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc`,
    }),
  }),
});

export const { useGetAlbumQuery } = getAlbumApi;
