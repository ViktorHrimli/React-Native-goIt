import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";

const rootReducer = combineReducers({
  verify: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export { store };
