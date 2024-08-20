import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import {
  IPublicationCreate,
  IPublicationDto,
  IPublicationsDto,
  IPublicationUpdate,
  URL,
} from '../model';

export const publicationsApi = createApi({
  reducerPath: 'publicationsApi',
  baseQuery: retry(fetchBaseQuery({ baseUrl: URL }), {
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
    createPublication: builder.mutation<IPublicationDto, IPublicationCreate>({
      query: (body) => ({
        url: 'publication',
        method: 'POST',
        body,
      }),
    }),
    updatePublication: builder.mutation<IPublicationDto, IPublicationUpdate>({
      query: (body) => ({
        url: 'publication',
        method: 'PUT',
        body,
      }),
    }),
    deletePublication: builder.mutation<string, number>({
      query: (id) => ({
        url: `publication/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetPublicationsQuery,
  useGetOnePublicationQuery,
  useCreatePublicationMutation,
  useDeletePublicationMutation,
  useUpdatePublicationMutation,
} = publicationsApi;
