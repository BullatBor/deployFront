import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { INewsDto, IСourseDto, ICourseGet, URL } from '../model';

const token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImMzMGI1MjA0LTBhZDktNDYyMC1iOWIwLTA4OWM2M2NlNDA0YyIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzI0NTc5ODgyLCJleHAiOjE3MjQ2NjYyODJ9.P9uAI30Jtb3VFgTIof6qyri_Gde7raz9mu4nFOZDb5g';

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
    getCourses: builder.query<IСourseDto[], void>({
      query: () => ({
        url: `courses`,
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
  useGetCoursesQuery,
} = courseApi;
