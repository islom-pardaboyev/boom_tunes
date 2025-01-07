import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  access_token: null,
  refresh_token: null
};

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.access_token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token;
    },
    clearToken: (state) => {
      state.access_token = null;
      state.refresh_token = null;
    },
  },
});

export const { setToken, clearToken } = tokenSlice.actions;

export default tokenSlice.reducer;