import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = process.env.REACT_APP_API_URL

export const paymentsApi = createApi({
  reducerPath: 'paymentsApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl,
   }),

  endpoints: (builder) => ({
    getAllPayments: builder.query({
      query: (filters= {}) => {
        return {
          url: "Payments/payments",
          params: filters
        }
      }
    }),
   
    getPaymentsPerMonth: builder.query({
      query: (filters= {}) => {
        return {
          url: "Payments/payments-per-month",
          params: filters
        }
      }
    }),

    getPaymentById: builder.query({
      query: (id, filters={}) => {
        return {
          url: `Payments/${id}`,
          params: filters
        }
      }
    }),

    getPaymentOrderById: builder.query({
      query: (id, filters={}) => {
        return {
          url: `Payments/order/${id}`,
          params: filters
        }
      }
    }),

    getPaymentTransactionById: builder.query({
      query: (id, filters={}) => {
        return {
          url: `Payments/transaction/${id}`,
          params: filters
        }
      }
    }),

    createCashPayment: builder.mutation({
      query: (newPayment) => ({
        url: 'Payments/create-cash-payment',
        method: 'POST',
        body: newPayment,
      }),
    }),

    createPayment: builder.mutation({
      query: (updatedPayment) => ({
        url: 'Payments/create-payment',
        method: 'PUT', 
        body: updatedPayment,
      }),
    }),

    createWebHook: builder.mutation({
      query: (payment) => ({
        url: 'Payments/webhook',
        method: 'PUT', 
        body: payment,
      }),
    }),

  }),
})

export const { 
  useGetAllPaymentsQuery,
  useGetPaymentsPerMonthQuery,
  useGetPaymentByIdQuery,
  useGetPaymentOrderByIdQuery,
  useGetPaymentTransactionByIdQuery,
  useCreateCashPaymentMutation,
  useCreatePaymentMutation,
  useCreateWebHookMutation
} = paymentsApi