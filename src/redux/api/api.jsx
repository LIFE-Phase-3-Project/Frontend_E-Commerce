import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const baseUrl = process.env.REACT_APP_API_URL;

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
    }),
})
