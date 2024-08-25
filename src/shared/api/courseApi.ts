import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { INewsDto, IСourseDto, ICourseGet, URL } from '../model';

const token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImMzMGI1MjA0LTBhZDktNDYyMC1iOWIwLTA4OWM2M2NlNDA0YyIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzI0NjA4NjM3LCJleHAiOjE3MjQ2OTUwMzd9.RCp9mTWJLm0y0OS4NAOuOpnK4xEoaVSvTxvnJD6MmgY';

export const courseApi = createApi({
  reducerPath: 'courseApi',
  baseQuery: retry(fetchBaseQuery({ baseUrl: URL }), {
    maxRetries: 3,
  }),
  tagTypes: ['courses'],
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
      providesTags: ['courses'],
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
      invalidatesTags: ['courses'],
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
      invalidatesTags: ['courses'],
    }),
    deleteCourse: builder.mutation<string, string>({
      query: (id) => ({
        url: `course/${id}`,
        method: 'DELETE',
        headers: {
          'Authorization': token,
        },
      }),
      invalidatesTags: ['courses'],
    }),
  }),
});

export const {
  useCreateCourseMutation,
  useGetCourseInfoQuery,
  useUpdateСourseMutation,
  useGetCoursesQuery,
  useDeleteCourseMutation,
} = courseApi;
