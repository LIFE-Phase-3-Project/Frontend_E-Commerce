import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = process.env.REACT_APP_API_URL

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl,
   }),

  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (filter= {}) => {
        return {
          url: "products",
          params: filter
        }
      }
    }),

    getProductById: builder.query({
      query: (id) => `products?id=${id}`,
    }),

    postProduct: builder.mutation({
      query: (newProduct) => ({
        url: 'products',
        method: 'POST',
        body: newProduct,
      }),
    }),

    updateProduct: builder.mutation({
      query: ({ id, updatedProduct }) => ({
        url: `products/${id}`,
        method: 'PUT', 
        body: updatedProduct,
      }),
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: 'DELETE',
      })
    })
  }),
})

export const { useGetAllProductsQuery, useGetProductByIdQuery, usePostProductMutation, useUpdateProductMutation, useDeleteProductMutation } = productsApi