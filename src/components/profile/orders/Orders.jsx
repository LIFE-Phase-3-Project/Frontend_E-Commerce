import React from 'react';
import { OrderRow } from './OrderRow';
import { useGetOrderByUserIdQuery } from '../../../redux/api/ordersApi';

export const Orders = () => {
  const { data, error, isLoading } = useGetOrderByUserIdQuery(localStorage.getItem('userId') || null);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading orders</div>;

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Image</th>
            <th scope="col" className="px-6 py-3">Product</th>
            <th scope="col" className="px-6 py-3">Total</th>
            <th scope="col" className="px-6 py-3">Order Status</th>
          </tr>
        </thead>
        <tbody>
          {data?.map(order => (
            <OrderRow key={order.id} order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
};