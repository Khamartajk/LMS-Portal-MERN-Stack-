import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/authSlice.js';
import rootReducer from "./rootReducer.js";


export const appStore = configureStore({
  reducer: rootReducer,
  middleware : (dMiddleware) => dMiddleware().concat(authApi.middleware)
});