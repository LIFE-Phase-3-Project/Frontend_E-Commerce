import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = process.env.REACT_APP_API_URL

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl,
   }),

  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: (filter= {}) => {
        return {
          url: "categories",
          params: filter
        }
      }
    }),

    getCategoriesById: builder.query({
      query: (id) => `categories/${id}`,
    }),

    postCategories: builder.mutation({
      query: (newCategory) => ({
        url: 'categories',
        method: 'POST',
        body: newCategory,
      }),
    }),

    updateCategory: builder.mutation({
      query: ({ id, updatedCategory }) => ({
        url: `categories/${id}`,
        method: 'PUT', 
        body: updatedCategory,
      }),
    }),

    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `categories/${id}`,
        method: 'DELETE',
      })
    })
  }),
})

export const { useGetAllCategoriesQuery, useGetCategoryByIdQuery, usePostCategoriesMutation, useUpdateCategoryMutation, useDeleteCategoryMutation } = categoriesApi