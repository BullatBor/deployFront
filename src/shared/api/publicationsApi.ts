import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { IPublicationDto, IPublicationsDto, Prettify } from '../model';

export const publicationsApi = createApi({
  reducerPath: 'publicationsApi',
  baseQuery: retry(fetchBaseQuery({ baseUrl: 'http://localhost:5173/api/' }), {
    maxRetries: 3,
  }),
  endpoints: (builder) => ({
    getPublications: builder.query<IPublicationsDto[], void>({
      query: () => ({
        url: 'publications',
        method: 'GET',
      }),
    }),
    getOnePublication: builder.query<IPublicationDto, number>({
      query: (id) => ({
        url: `publications/${id}`,
        method: 'GET',
      }),
    }),
    createPublication: builder.query<
      IPublicationDto,
      Prettify<
        Omit<IPublicationDto, 'id' | 'createdAt' | 'updatedAt' | 'year_id' | 'publicationId'> & {
          year: number;
        }
      >
    >({
      query: (body) => ({
        url: 'publication',
        method: 'POST',
        body,
      }),
    }),
    updatePublication: builder.query<
      IPublicationDto,
      Prettify<Omit<IPublicationDto, 'createdAt' | 'updatedAt' | 'year_id' | 'publicationId'>>
    >({
      query: (body) => ({
        url: 'publication',
        method: 'PUT',
        body,
      }),
    }),
    deletePublication: builder.query<string, number>({
      query: (id) => ({
        url: `publications/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetPublicationsQuery,
  useGetOnePublicationQuery,
  useCreatePublicationQuery,
  useDeletePublicationQuery,
  useUpdatePublicationQuery,
} = publicationsApi;
