import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { URL, IChapterFormValues, IChapterUpdate } from '../model';

const token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImMzMGI1MjA0LTBhZDktNDYyMC1iOWIwLTA4OWM2M2NlNDA0YyIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzI0NTc5ODgyLCJleHAiOjE3MjQ2NjYyODJ9.P9uAI30Jtb3VFgTIof6qyri_Gde7raz9mu4nFOZDb5g';

export const chapterApi = createApi({
  reducerPath: 'chapterApi',
  baseQuery: retry(fetchBaseQuery({ baseUrl: URL }), {
    maxRetries: 3,
  }),
  tagTypes: ['chapters'],
  endpoints: (builder) => ({
    createChapter: builder.mutation<string, FormData>({
      query: (body) => ({
        url: 'course/chapter/create',
        method: 'POST',
        headers: {
          'Authorization': token,
        },
        body,
      }),
      invalidatesTags: ['chapters'],
    }),
    updateChapter: builder.mutation<string, FormData>({
      query: (body) => ({
        url: 'course/chapter/update',
        method: 'PUT',
        headers: {
          'Authorization': token,
        },
        body,
      }),
      invalidatesTags: ['chapters'],
    }),
    updatePositions: builder.mutation<string, IChapterUpdate>({
      query: (body) => ({
        url: 'course/chapter/updatePositions',
        method: 'PUT',
        headers: {
          'Authorization': token,
        },
        body,
      }),
      invalidatesTags: ['chapters'],
    }),
    getChapters: builder.query<IChapterFormValues[], { courseId: string }>({
      query: (data) => ({
        url: `course/${data.courseId}/chapters`,
        method: 'GET',
        headers: {
          'Authorization': token,
        },
      }),
      providesTags: ['chapters'],
    }),
    deleteAttachment: builder.mutation<string, string>({
      query: (id) => ({
        url: `chapterAtachment/${id}`,
        method: 'DELETE',
        headers: {
          'Authorization': token,
        },
      }),
    }),
    deleteChapter: builder.mutation<string, string>({
      query: (id) => ({
        url: `course/chapter/${id}`,
        method: 'DELETE',
        headers: {
          'Authorization': token,
        },
      }),
      invalidatesTags: ['chapters'],
    }),
    deleteChapterData: builder.mutation<string, string>({
      query: (id) => ({
        url: `chapterData/${id}`,
        method: 'DELETE',
        headers: {
          'Authorization': token,
        },
      }),
    }),
  }),
});

export const {
  useGetChaptersQuery,
  useCreateChapterMutation,
  useDeleteAttachmentMutation,
  useUpdateChapterMutation,
  useUpdatePositionsMutation,
  useDeleteChapterMutation,
  useDeleteChapterDataMutation,
} = chapterApi;
