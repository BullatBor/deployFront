import { createSlice } from '@reduxjs/toolkit';
import { authApi, IAuth } from './authApi';

const initialState: IAuth = {
  id: null,
  token: '',
  role: 'OTHER',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signOut: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(signOut, () => localStorage.removeItem('token'))
      .addMatcher(authApi.endpoints.authorization.matchFulfilled, (_state, action) => {
        _state = action.payload;
      })
      .addMatcher(authApi.endpoints.registration.matchFulfilled, (_state, action) => {
        _state = action.payload;
      })
      .addMatcher(authApi.endpoints.authCheck.matchFulfilled, (_state, action) => {
        _state = action.payload;
      });
  },
});

export const { signOut } = authSlice.actions;
export default authSlice.reducer;
