import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = process.env.REACT_APP_API_URL

const authToken = () => {
  return localStorage.getItem('token')
}


export const shoppingCartApi = createApi({
  reducerPath: 'shoppingCartApi',
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
    getAllShoppingCart: builder.query({
      query: (filters= {}) => {
        return {
          url: "ShoppingCart",
          params: filters
        }
      }
    }),
    
    addItemToCart: builder.mutation({
      query: (id) => ({
        url: `ShoppingCart/AddItemToCart/${id}`,
        method: 'POST',
      }),
    }),

    updateQuantity: builder.mutation({
      query: (productId, quantity) => ({
        url: `ShoppingCart/UpdateQuantity/${productId}/${quantity}`,
        method: 'DELETE',
      })
    }),

    shoppingCartDeleteItem: builder.mutation({
      query: (id) => ({
        url: `ShoppingCart/DeleteItem/${id}`,
        method: 'DELETE',
      })
    }),

    clearCart: builder.mutation({
      query: () => ({
        url: "ShoppingCart/ClearCart",
        method: 'DELETE',
      })
    }),
  }),
})

export const { 
  useGetAllShoppingCartQuery,
  useAddItemToCartMutation,
  useUpdateQuantityMutation,
  useShoppingCartDeleteItemMutation,
  useClearCartMutation
} = shoppingCartApi