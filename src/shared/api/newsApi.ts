import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { INewsCreate, INewsDto, INewsUpdate, URL } from '../model';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: retry(fetchBaseQuery({ baseUrl: `${URL}/api/` }), {
    maxRetries: 3,
  }),
  endpoints: (builder) => ({
    getNews: builder.query<INewsDto[], void>({
      query: () => ({
        url: 'news',
        method: 'GET',
      }),
    }),
    getOneNew: builder.query<INewsDto, number>({
      query: (id) => ({
        url: `news/${id}`,
        method: 'GET',
      }),
    }),
    createNew: builder.mutation<INewsDto, INewsCreate>({
      query: (body) => ({
        url: 'new',
        method: 'POST',
        body,
      }),
    }),
    updateNew: builder.mutation<INewsDto, INewsUpdate>({
      query: (body) => ({
        url: 'new',
        method: 'PUT',
        body,
      }),
    }),
    deleteNew: builder.mutation<string, number>({
      query: (id) => ({
        url: `news/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetNewsQuery,
  useGetOneNewQuery,
  useCreateNewMutation,
  useDeleteNewMutation,
  useUpdateNewMutation,
} = newsApi;
