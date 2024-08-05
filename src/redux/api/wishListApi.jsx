import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = process.env.REACT_APP_API_URL

const authToken = () => {
    return localStorage.getItem('token')
  }

export const wishlistApi = createApi({
  reducerPath: 'wishlistApi',
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
    getWishListEntries: builder.query({
      query: () => {
        return {
          url: "Wishlist/GetWishListEntries",
        }
      }
    }),

    addWishListEntry: builder.mutation({
      query: (id, newEntry) => ({
        url: `Wishlist/AddWishListEntry/${id}`,
        method: 'POST',
        body: newEntry,
      }),
    }),

    deleteWishlistEntry: builder.mutation({
      query: (id) => ({
        url: `Wishlist/RemoveWishlistEntry/${id}`,
        method: 'DELETE',
      })
    })
  }),
})

export const { useGetWishListEntriesQuery, useAddWishListEntryMutation, useDeleteWishlistEntryMutation } = wishlistApi