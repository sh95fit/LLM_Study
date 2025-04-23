import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginAPI, checkAuthAPI } from './authAPI';

export const login = createAsyncThunk('auth/login', loginAPI);
export const checkAuth = createAsyncThunk('auth/checkAuth', checkAuthAPI);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isAuthenticated = action.payload.isAuthenticated;
      });
  },
});

export default authSlice.reducer;
