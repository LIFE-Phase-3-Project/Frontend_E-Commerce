import { InformationCards } from "../../components/admin/dashboard/InformationCards";
import { AdminDashboardOrders } from '../../components/admin/dashboard/AdminDashboardOrders';
import { AdminDashboardSales } from "../../components/admin/dashboard/AdminDashboardSales";

export const AdminDashboard = () => {
    return (
        <div className="admin-dashboard text-green-800 dark:text-white pl-7 pr-5">
            <div className="admin-dashboard-head mt-7">
                <h2 className="text-2xl">Dashboard</h2>
                <h3 className="text-md text-orange-700 dark:text-green-400">Welcome to your dashboard</h3>
            </div>

            <InformationCards />
            <AdminDashboardOrders />
            <AdminDashboardSales />
      
        </div>
    );
};
