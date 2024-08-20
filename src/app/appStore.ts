import { authApi, listenerMiddleware, newsApi, publicationsApi } from '@/shared';
import authSlice from '@/shared/api/authSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  [publicationsApi.reducerPath]: publicationsApi.reducer,
  [newsApi.reducerPath]: newsApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  auth: authSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware, publicationsApi.middleware, newsApi.middleware)
      .prepend(listenerMiddleware.middleware),
});
