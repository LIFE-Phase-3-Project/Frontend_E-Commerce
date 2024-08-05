import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = process.env.REACT_APP_API_URL

export const brandsApi = createApi({
  reducerPath: 'brandsApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl,
   }),

  endpoints: (builder) => ({
    getAllBrands: builder.query({
      query: (filter= {}) => {
        return {
          url: "brands",
          params: filter
        }
      }
    }),

    getBrandById: builder.query({
      query: (id) => `brands/${id}`,
    }),

    postBrands: builder.mutation({
      query: (newCategory) => ({
        url: 'brands',
        method: 'POST',
        body: newCategory,
      }),
    }),

    updateBrand: builder.mutation({
      query: ({ id, updatedBrand }) => ({
        url: `brands/${id}`,
        method: 'PUT', 
        body: updatedBrand,
      }),
    }),

    deleteBrand: builder.mutation({
      query: (id) => ({
        url: `brands/${id}`,
        method: 'DELETE',
      })
    })
  }),
})

export const { useGetAllBrandsQuery, useGetBrandByIdQuery, usePostBrandsMutation, useUpdateBrandMutation, useDeleteCategoryMutation } = brandsApi