import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer.js";
import { authApi } from './../features/api/authApi';


export const appStore = configureStore({
  reducer: rootReducer,
  middleware : (dMiddleware) => dMiddleware().concat(authApi.middleware)
});