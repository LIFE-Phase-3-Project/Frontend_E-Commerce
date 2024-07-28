import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = process.env.REACT_APP_API_URL

export const reviewsApi = createApi({
  reducerPath: 'reviewsApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl,
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

    getReviewById: builder.query({
      query: (id, filters={}) => {
        return {
          url: `Review/${id}`,
          params: filters
        }
      }
    }),

    postCategorie: builder.mutation({
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

export const { useGetAllReviewsQuery, useGetReviewByIdQuery, usePostCategorieMutation, useUpdateReviewMutation, useDeleteReviewMutation } = reviewsApi