import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const plannerApi = createApi({
  reducerPath: 'emailApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://planner.rdclr.ru/api/' }),
  endpoints: (builder) => ({
    getUserDataByEmail: builder.query<unknown, string>({
      query: (email) => `/taken-emails/${email}`
    })
  }),
});

export const { useGetUserDataByEmailQuery } = plannerApi;
