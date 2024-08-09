import { newsApi } from '@/shared/api/newsApi';
import { publicationsApi } from '@/shared/api/publicationsApi';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  [publicationsApi.reducerPath]: publicationsApi.reducer,
  [newsApi.reducerPath]: newsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(publicationsApi.middleware, newsApi.middleware),
});
