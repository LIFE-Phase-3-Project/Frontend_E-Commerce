import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = process.env.REACT_APP_API_URL

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl,
   }),

  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: (filters= {}) => {
        return {
          url: "Category",
          params: filters
        }
      }
    }),

    getCategoryById: builder.query({
      query: (id, filters={}) => {
        return {
          url: `Category/${id}`,
          params: {id, ...filters}
        }
      }
    }),

    postCategorie: builder.mutation({
      query: (newCategory) => ({
        url: 'Category',
        method: 'POST',
        body: newCategory,
      }),
    }),

    updateCategory: builder.mutation({
      query: ({ id, updatedCategory }) => ({
        url: `Category/${id}`,
        method: 'PUT', 
        body: updatedCategory,
      }),
    }),

    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `Category/${id}`,
        method: 'DELETE',
      })
    })
  }),
})

export const { useGetAllCategoriesQuery, useGetCategoryByIdQuery, usePostCategorieMutation, useUpdateCategoryMutation, useDeleteCategoryMutation } = categoriesApi