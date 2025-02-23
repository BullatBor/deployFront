import {
  authApi,
  listenerMiddleware,
  newsApi,
  publicationsApi,
  courseApi,
  usersApi,
  chapterApi,
} from '@/shared';
import authSlice from '@/shared/api/authSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  [publicationsApi.reducerPath]: publicationsApi.reducer,
  [newsApi.reducerPath]: newsApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [courseApi.reducerPath]: courseApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
  [chapterApi.reducerPath]: chapterApi.reducer,
  auth: authSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(
        authApi.middleware,
        publicationsApi.middleware,
        newsApi.middleware,
        courseApi.middleware,
        usersApi.middleware,
        chapterApi.middleware,
      )
      .prepend(listenerMiddleware.middleware),
});
