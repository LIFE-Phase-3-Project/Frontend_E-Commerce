import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.REACT_APP_API_URL;

const authToken = () => {
  return localStorage.getItem('token')
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ 
    baseUrl,
    prepareHeaders: (headers) => {
      const token = authToken();
      
      if(token) {
        headers.set('Authorization', `Bearer ${token}`)
      }

      return headers
    }
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "User",
        method: "POST",
        body: userData,
      }),
    }),
    loginUser: builder.mutation({
      query: (userCredentials) => ({
        url: "User/login",
        method: "POST",
        body: userCredentials,
      }),
    }),

    getUserByID: builder.query({
      query: (userId) => ({
        url: `User/GetUserByID/${userId}`,
      }),
    }),
    
    getAllUsers: builder.query({
      query: () => ({
        url: "User/GetUsers"
      })
    }),

    updateUser: builder.mutation({
      query: ({ id, updatedUser }) => ({
        url: `User/${id}`,
        method: 'PUT', 
        body: updatedUser,
      }),
    }),
    
    deleteUser: builder.mutation({
      query: (id) => {
        return {
          url: "User/DeleteUser",
          params: {id}
        }
      }
    })
  }),
});

export const { 
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetUserByIDQuery,
  useGetAllUsersQuery,
  useUpdateUserMutation,
  useDeleteUserMutation
} = authApi;
