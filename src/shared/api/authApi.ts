import { URL } from '../model';
import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

export interface IAuth {
  id: number | null;
  token: string;
  role: 'USER' | 'ADMIN' | 'OTHER';
}

export interface IRequest {
  email: string;
  password: string;
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: retry(
    fetchBaseQuery({
      baseUrl: URL,
      // prepareHeaders: (headers, { getState }) => {
      //   const token = (getState() as RootState).auth.token;
      //   if (token) {
      //     headers.set('authorization', `Bearer ${token}`);
      //   }
      //   return headers;
      // },
    }),
    { maxRetries: 5 },
  ),
  endpoints: (builder) => ({
    authorization: builder.mutation<IAuth, IRequest>({
      query: (credentials) => ({
        url: `authorization`,
        method: 'POST',
        body: credentials,
      }),
    }),
    registration: builder.mutation<IAuth, IRequest>({
      query: (credentials) => ({
        url: `registration`,
        method: 'POST',
        body: credentials,
      }),
    }),
    authCheck: builder.mutation<IAuth, string>({
      query: (token) => ({
        url: `authCheck`,
        method: 'GET',
        body: token,
      }),
    }),
  }),
});

export const { useAuthorizationMutation, useRegistrationMutation, useAuthCheckMutation } = authApi;
