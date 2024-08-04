import React from 'react';

export const OrderRow = ({ order }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="p-4">
        <img src="/docs/images/products/apple-watch.png" className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {order.name}
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          {order.orderTotal}
        </div>
      </td>
      <td className="px-6 py-4">
        <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">
          {order.status || "Pending" }
        </a>
      </td>
    </tr>
  );
};