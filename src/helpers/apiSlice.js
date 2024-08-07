import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ajax.test-danit.com/api/swapi/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (entity) => `${entity}`,
    }),
  }),
});

export const { useGetPostsQuery } = apiSlice;
