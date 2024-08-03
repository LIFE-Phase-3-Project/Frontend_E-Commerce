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
          url: "SubCategory",
          params: filter
        }
      }
    }),

    getSubCategoriesById: builder.query({
      query: (id) => `SubCategory/${id}`,
    }),

    postSubCategorie: builder.mutation({
      query: (newSubCategory) => ({
        url: 'SubCategory',
        method: 'POST',
        body: newSubCategory,
      }),
    }),

    updateSubCategory: builder.mutation({
      query: ({ id, updatedSubCategory }) => ({
        url: `SubCategory/${id}`,
        method: 'PUT', 
        body: updatedSubCategory,
      }),
    }),

    deleteSubCategory: builder.mutation({
      query: (id) => ({
        url: `SubCategory/${id}`,
        method: 'DELETE',
      })
    })
  }),
})

export const { useGetAllSubCategoriesQuery, useGetSubCategoriesByIdQuery, usePostSubCategorieMutation, useUpdateSubCategoryMutation, useDeleteSubCategoryMutation } = subCategoriesApi