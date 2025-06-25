import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  session: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
    setSessionMsg: (state, action) => {
      state.session = action.payload;
    },
  },
});

export const { setCredentials, setSessionMsg, logout } = authSlice.actions;
export default authSlice.reducer;
