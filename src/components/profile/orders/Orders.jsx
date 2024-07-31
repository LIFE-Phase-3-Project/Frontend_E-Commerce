import React, { useState } from 'react';
import { OrderRow } from './OrderRow';
import { useGetOrderByIdQuery } from '../../../redux/api/ordersApi';

export const Orders = (id)=> {
    const { data, error, isLoading } = useGetOrderByIdQuery(id);
    return(
        <div>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-16 py-3">
                    <span class="sr-only">Image</span>
                </th>
                <th scope="col" class="px-6 py-3">
                    Product
                </th>
                <th scope="col" class="px-6 py-3">
                    Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Order Status
                </th>
            </tr>
        </thead>
        <tbody>
           
           <OrderRow orderData={data}/>
        </tbody>
    </table>
</div>
</div>

    )
}
