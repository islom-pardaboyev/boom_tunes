import { api } from ".";

export const getSeveralArtist = api.injectEndpoints({
    endpoints: (builder) => ({
        getSeveralArtist: builder.query({
            query: () =>
                `artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6`,
        }),
    }),
})

export const { useGetSeveralArtistQuery } = getSeveralArtist;   