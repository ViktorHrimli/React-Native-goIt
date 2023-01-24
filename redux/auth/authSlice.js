import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  name: null,
  stateChange: null,
  email: null,
  photo: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.uid,
      name: payload.displayName,
      email: payload.email,
      photo: payload.photoURL,
    }),
    stateChangeUser: (state, { payload }) => ({
      ...state,
      stateChange: payload,
    }),
    logOutUser: () => initialState,
  },
});

export const { saveUserProfile, stateChangeUser, logOutUser } =
  authSlice.actions;
export const authReducer = authSlice.reducer;
