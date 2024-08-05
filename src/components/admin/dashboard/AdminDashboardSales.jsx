import { useEffect, useState } from "react";
import { useGetPaymentsPerMonthQuery, useGetAllPaymentsQuery } from "../../../redux/api/paymentsApi";
import { BarChartComponent } from "./charts/BarChartComponent";

export const AdminDashboardSales = () => {
    const [filteredPayments, setFilteredPayments] = useState([])

    const { data: paymentsPerMonth, isLoading: paymentsPerMonthLoading, error:paymentsPerMonthError } = useGetPaymentsPerMonthQuery();
    const { data: payments, isLoading: paymentsLoading, error:paymentsError } = useGetAllPaymentsQuery();


    const chartData = paymentsPerMonth?.map(payment => ({
        month: payment.month,
        payments: payment.payments
    })) || [];

    useEffect(() => {
        setFilteredPayments(payments?.slice(0, 4))

    }, [payments])

    if (paymentsPerMonthLoading) return <div>Loading...</div>;
    if (paymentsPerMonthError) return <div>Error loading data</div>;

    return (
        <div className="admin-dashboard-payments mt-10 flex justify-between box-border">
           <div className="pending-status-payments bg-admin-green-dashboard-color text-white dark:bg-admin-sidebar-color box-border">
                <div className="pending-status-payments-items">
                    <h2 className='mb-2 py-3 text-center text-lg border-b-2 border-gray-200 dark:border-admin-blue-color'>Pending status payments</h2>
                    <div className="flex items-center justify-between mb-2 px-2 py-3 border-b-8 border-gray-200 dark:border-admin-blue-color">
                        <h2 className='text-center text-md'>Order Id</h2>
                        <h2 className='text-center text-md'>Payment Id</h2>
                    </div>

                    {filteredPayments?.map((payment, key) => {
                        return (
                            <div key={key} className='flex justify-between border-b-8 border-gray-200 dark:border-admin-blue-color py-4 px-6'>
                                <h2>{payment?.orderId}</h2>
                                <h2>{payment?.paymentId}</h2>
                            </div>
                        )
                    })}

                </div>
            </div>
           
            <div className="payments-per-month text-white bg-green-dark dark:bg-admin-sidebar-color p-4 rounded-lg shadow-md w-full">
                <h2 className="mb-12 mt-3 text-center text-lg">Payments per month</h2>
                <BarChartComponent data={chartData} />
            </div>
        </div>
    );
};
