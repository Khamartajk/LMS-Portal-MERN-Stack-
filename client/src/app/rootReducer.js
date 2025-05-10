import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "@/features/authSlice.js";
import { authApi } from "@/features/api/authApi";

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  authApi: reducer,
  auth: auth.Reducer,
});

export default rootReducer;
