// store/api/baseApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://fakestoreapi.com",
  // prepareHeaders: (headers, { getState }) => {
  //   const token = (getState() as RootState).auth.accessToken;
  //   if (token) {
  //     headers.set("Authorization", `${token}`);
  //   }
  //   return headers;
  // },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery,
  endpoints: () => ({}),
  tagTypes: [
    "product"
  ],
});

export default baseApi;