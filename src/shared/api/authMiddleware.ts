import { createListenerMiddleware } from '@reduxjs/toolkit';
import { authApi } from './authApi';

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher:
    authApi.endpoints.authorization.matchFulfilled ||
    authApi.endpoints.registration.matchFulfilled ||
    authApi.endpoints.authCheck.matchFulfilled,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();
    if (action.payload.token) {
      localStorage.setItem('token', action.payload.token);
    }
  },
});
