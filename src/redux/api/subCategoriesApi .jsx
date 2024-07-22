import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = process.env.REACT_APP_API_URL

export const subCategoriesApi = createApi({
  reducerPath: 'subCategoriesApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl,
   }),

  endpoints: (builder) => ({
    getAllSubCategories: builder.query({
      query: (filter= {}) => {
        return {
          url: "sub-categories",
          params: filter
        }
      }
    }),

    getSubCategoriesById: builder.query({
      query: (id) => `sub-categories/${id}`,
    }),

    postSubCategorie: builder.mutation({
      query: (newSubCategory) => ({
        url: 'sub-categories',
        method: 'POST',
        body: newSubCategory,
      }),
    }),

    updateSubCategory: builder.mutation({
      query: ({ id, updatedSubCategory }) => ({
        url: `sub-categories/${id}`,
        method: 'PUT', 
        body: updatedSubCategory,
      }),
    }),

    deleteSubCategory: builder.mutation({
      query: (id) => ({
        url: `sub-categories/${id}`,
        method: 'DELETE',
      })
    })
  }),
})

export const { useGetAllSubCategoriesQuery, useGetSubCategoriesByIdQuery, usePostSubCategorieMutation, useUpdateSubCategoryMutation, useDeleteSubCategoryMutation } = subCategoriesApi