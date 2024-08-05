import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = process.env.REACT_APP_API_URL

export const ordersApi = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl,
   }),

  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: (filters= {}) => {
        return {
          url: "Order",
          params: filters
        }
      }
    }),
   
    getOrdersPerMonth: builder.query({
      query: (filters= {}) => {
        return {
          url: "Order/orders-per-month",
          params: filters
        }
      }
    }),

    getOrderById: builder.query({
      query: (id, filters={}) => {
        return {
          url: `Order/${id}`,
          params: filters
        }
      }
    }),

    getOrderByUserId: builder.query({
      query: (id, filters={}) => {
        return {
          url: `Order/user/${id}`,
          params: filters
        }
      }
    }),

    postOrder: builder.mutation({
      query: (newOrder) => ({
        url: `Order?cartIdentifier=${newOrder?.cartIdentifier}&userId=${newOrder?.userId}`,
        method: 'POST',
        body: newOrder,
      }),
    }),

    updateOrder: builder.mutation({
      query: ({ id, updatedOrder }) => ({
        url: `Order/${id}`,
        method: 'PUT', 
        body: updatedOrder,
      }),
    }),

    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `Order/${id}`,
        method: 'DELETE',
      })
    })
  }),
})

export const { 
  useGetAllOrdersQuery,
  useGetOrdersPerMonthQuery,
  useGetOrderByIdQuery,
  useGetOrderByUserIdQuery,
  usePostOrderMutation,
  useUpdateOrderMutation,
  useDeleteOrderMutation
} = ordersApi