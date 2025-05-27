import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "@/features/authSlice.js";
import { authApi } from "@/features/api/authApi";

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer, // RTK Query auto-generated reducer
  auth: authReducer,                      // Your custom auth reducer
});

export default rootReducer;
