import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = process.env.REACT_APP_API_URL

const authToken = () => {
  return localStorage.getItem('token')
}

export const reviewsApi = createApi({
  reducerPath: 'reviewsApi',
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
    getAllReviews: builder.query({
      query: (filters= {}) => {
        return {
          url: "Review",
          params: filters
        }
      }
    }),

    getReviewByProductId: builder.query({
      query: (id, filters={}) => {
        return {
          url: `Review/product/${id}`,
          params: filters
        }
      }
    }),

    postReview: builder.mutation({
      query: (newReview) => ({
        url: 'Review',
        method: 'POST',
        body: newReview,
      }),
    }),

    updateReview: builder.mutation({
      query: ({ id, updatedReview }) => ({
        url: `Review/${id}`,
        method: 'PUT', 
        body: updatedReview,
      }),
    }),

    deleteReview: builder.mutation({
      query: (id) => ({
        url: `Review/${id}`,
        method: 'DELETE',
      })
    })
  }),
})

export const { useGetAllReviewsQuery, useGetReviewByProductIdQuery, usePostReviewMutation, useUpdateReviewMutation, useDeleteReviewMutation } = reviewsApi