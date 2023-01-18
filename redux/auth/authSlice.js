import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  name: null,
  stateChange: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.uid,
      name: payload.displayName,
    }),
  },
});

export const { saveUserProfile } = authSlice.actions;
export const authReducer = authSlice.reducer;
