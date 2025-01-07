import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { API } from "../../hooks/useEnv";
import { RootState } from "..";

const baseQuery = async (args: any, api: any, extraOptions: any) => {
  const rawBaseQuery = fetchBaseQuery({
    baseUrl: API,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).token.access_token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });

  const result = await rawBaseQuery(args, api, extraOptions);

  if (result.error) {
    const { status } = result.error;
    if (status === 401 || status === 403) {
      console.error("Unauthorized access - Redirecting to login...");
    }
  }
  return result;
};
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });

export const api = createApi({
  reducerPath: "boom_tunes",
  tagTypes: ["boom_tunes"],
  baseQuery: baseQueryWithRetry,
  endpoints: () => ({}),
});
