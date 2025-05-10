import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { BaseQueryApi } from './../../../node_modules/@reduxjs/toolkit/src/query/baseQueryTypes';
import { userLoggedIn } from '../authSlice';


const USER_API = "http://localhost:8000/api/v1/user" 

export const authApi = createApi({
  reducerPath : "authAPi",
  baseQuery : fetchBaseQuery({
    baseUrl : USER_API,
    credentials : 'include'
  }),
  endpoints: (builder)=>{
    registerUser : builder.mutation({
      query: (inputData) => ({
        url:"register",
        method: "POST",
        body: inputData
      })
    });
    loginUser : builder.mutation({
      query: (inputData) => ({
        url:"login",
        method: "POST",
        body: inputData
      }),
      async onQueryStarted(_,{queryFulfilled,dispatch}) {
        try {
          const result = await queryFulfilled;
          dispatch(userLoggedIn({user:result.data.user}))
        } catch (error) {
          console.log(error);
        }
      }
    })
  }
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation
} = authApi;