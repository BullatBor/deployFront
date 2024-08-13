import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { INewsDto, Prettify } from '../model';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: retry(fetchBaseQuery({ baseUrl: 'http://localhost:5173/api/' }), {
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
    createNew: builder.mutation<INewsDto, Prettify<Pick<INewsDto, 'title' | 'description'>>>({
      query: (body) => ({
        url: 'new',
        method: 'POST',
        body,
      }),
    }),
    updateNew: builder.mutation<INewsDto, Prettify<Pick<INewsDto, 'id' | 'title' | 'description'>>>(
      {
        query: (body) => ({
          url: 'new',
          method: 'PUT',
          body,
        }),
      },
    ),
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
