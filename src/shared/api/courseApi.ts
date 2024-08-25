import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { INewsDto, IСourseDto, ICourseGet, URL, IParticipant } from '../model';

const token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImMzMGI1MjA0LTBhZDktNDYyMC1iOWIwLTA4OWM2M2NlNDA0YyIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzI0NTExMDU2LCJleHAiOjE3MjQ1OTc0NTZ9.es9bqVsFpwDS3E6IgSuTWKs1SfxOxTFhKlo3ovfjb2c';

export const courseApi = createApi({
  reducerPath: 'courseApi',
  baseQuery: retry(fetchBaseQuery({ baseUrl: URL }), {
    maxRetries: 3,
  }),
  endpoints: (builder) => ({
    getNews: builder.query<INewsDto[], void>({
      query: () => ({
        url: 'news',
        method: 'GET',
      }),
    }),
    getCourseInfo: builder.query<IСourseDto, ICourseGet>({
      query: (data) => ({
        url: `course?courseId=${data.courseId}&userId=${data.userId}`,
        method: 'GET',
      }),
    }),
    createCourse: builder.mutation<IСourseDto, { title_ru: string }>({
      query: (body) => ({
        url: 'course/create',
        method: 'POST',
        headers: {
          'Authorization': token,
        },
        body,
      }),
    }),
    updateСourse: builder.mutation<INewsDto, FormData>({
      query: (body) => ({
        url: 'course/update',
        method: 'PUT',
        headers: {
          'Authorization': token,
        },
        body,
      }),
    }),
    searchUsers: builder.query<IParticipant[], { email: string }>({
      query: ({ email }) => ({
        url: `users?email=${email}`,
        method: 'GET',
      }),
    }),
    getParticipants: builder.query<IParticipant[], { courseId: string }>({
      query: (data) => ({
        url: `course/${data.courseId}/getParticipants`,
        method: 'GET',
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
  useCreateCourseMutation,
  useGetCourseInfoQuery,
  useUpdateСourseMutation,
  useGetParticipantsQuery,
  useLazySearchUsersQuery,
} = courseApi;
