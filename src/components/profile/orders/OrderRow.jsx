import {  useGetOrderByUserIdQuery} from '../../../redux/api/ordersApi';
import { useState, useEffect } from 'react';

export const OrderRow = (orderData) =>{

    const { data, refetch } =   useGetOrderByUserIdQuery(orderData.id);
    const [orderItems, setOrderItems] = useState([]);

    useEffect(() => {
        setOrderItems(data?.items || []);
      }, [data]);

    return(
        <div>
        {orderItems?.map(item => (
             <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="p-4">
                    <img src="/docs/images/products/apple-watch.png" class="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch"/>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {item.name}
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                    {item.quantity}
                    </div>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {item.price}
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">
                       {item.status}
                    </a>
                </td>
            </tr>
          ))}
    </div>
    )
}