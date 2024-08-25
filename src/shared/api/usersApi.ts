import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { URL, IParticipant, IUsers } from '../model';

const token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImMzMGI1MjA0LTBhZDktNDYyMC1iOWIwLTA4OWM2M2NlNDA0YyIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzI0NTc5ODgyLCJleHAiOjE3MjQ2NjYyODJ9.P9uAI30Jtb3VFgTIof6qyri_Gde7raz9mu4nFOZDb5g';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: retry(fetchBaseQuery({ baseUrl: URL }), {
    maxRetries: 3,
  }),
  tagTypes: ['participants'],
  endpoints: (builder) => ({
    addParticipants: builder.mutation<string, { participants: IParticipant[] }>({
      query: (body) => ({
        url: 'course/addParticipants',
        method: 'POST',
        headers: {
          'Authorization': token,
        },
        body,
      }),
      invalidatesTags: ['participants'],
    }),
    blockedUsers: builder.mutation<string, { courseId: string; userId: string }>({
      query: (body) => ({
        url: 'course/blockedParticipant',
        method: 'POST',
        headers: {
          'Authorization': token,
        },
        body,
      }),
      invalidatesTags: ['participants'],
    }),
    searchUsers: builder.query<IUsers[], { email: string }>({
      query: ({ email }) => ({
        url: `user/getAll?email=${email}`,
        headers: {
          'Authorization': token,
        },
        method: 'GET',
      }),
    }),
    getParticipants: builder.query<IParticipant[], { courseId: string }>({
      query: (data) => ({
        url: `course/${data.courseId}/getParticipants`,
        method: 'GET',
        headers: {
          'Authorization': token,
        },
      }),
      providesTags: ['participants'],
    }),
  }),
});

export const {
  useGetParticipantsQuery,
  useLazySearchUsersQuery,
  useAddParticipantsMutation,
  useBlockedUsersMutation,
} = usersApi;
