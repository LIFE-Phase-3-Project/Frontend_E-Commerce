import { useEffect, useState } from "react";
import { AreaChartComponent } from "./charts/AreaChartComponent"
import { useGetAllOrdersQuery, useGetOrdersPerMonthQuery } from "../../../redux/api/ordersApi";

export const AdminDashboardOrders = () => {
    const [filteredOrders, setFilteredOrders] = useState([])

    const { data: ordersData, isLoading:ordersDataLoading, isError: ordersDataError } = useGetOrdersPerMonthQuery();
    const { data: orders, isLoading: orderLoading, isError:ordersError } = useGetAllOrdersQuery();

    const chartData = ordersData?.map(order => ({
        month: order.month,
        orders: order.orders
    }));

    useEffect(() => {
        setFilteredOrders(orders?.slice(0, 5))

    }, [orders])

    return (
        <div className="admin-dashboard-orders mt-10 flex justify-between box-border">
        <div className='orders-per-month text-white bg-green-dark dark:bg-admin-sidebar-color'>
            <h2 className='mb-12 mt-3 text-center text-lg'>Orders per month</h2>
            <AreaChartComponent data={chartData} />
        </div>

        <div className="last-orders bg-admin-green-dashboard-color text-white dark:bg-admin-sidebar-color box-border">
            <div className="last-orders-items">
                <h2 className='mb-2 py-3 text-center text-lg border-b-8 border-green-100 dark:border-admin-blue-color'>Last orders</h2>

                {filteredOrders?.map((order, key) => {
                    return (
                        <div key={key} className='flex justify-between border-b-8 border-green-100 dark:border-admin-blue-color py-4 px-6'>
                            <h2>{order?.name}</h2>
                            <h2>{order?.orderTotal.toFixed(2)}&#8364;</h2>
                        </div>
                    )
                })}

            </div>
        </div>
    </div>
    )
}