import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = process.env.REACT_APP_API_URL

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl,
   }),

  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (filters= {}) => {
        return {
          url: "Product/search",
          params: filters
        }
      }
    }),

    getProductById: builder.query({
      query: (id) => `Product/${id}`,
    }),

    postProduct: builder.mutation({
      query: (newProduct) => ({
        url: 'Product',
        method: 'POST',
        body: newProduct,
      }),
    }),

    updateProduct: builder.mutation({
      query: ({ id, updatedProduct }) => ({
        url: `Product/${id}`,
        method: 'PUT', 
        body: updatedProduct,
      }),
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `Product/${id}`,
        method: 'DELETE',
      })
    })
  }),
})

export const { useGetAllProductsQuery, useGetProductByIdQuery, usePostProductMutation, useUpdateProductMutation, useDeleteProductMutation } = productsApi