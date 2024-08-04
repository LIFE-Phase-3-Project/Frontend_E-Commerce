import { InformationCards } from "../../components/admin/dashboard/InformationCards";
import { AdminDashboardOrders } from '../../components/admin/dashboard/AdminDashboardOrders';
import { AdminDashboardSales } from "../../components/admin/dashboard/AdminDashboardSales";

const AdminDashboard = () => {
    return (
        <div className="w-full admin-dashboard bg-green-100 dark:bg-admin-blue-color text-green-800 dark:text-white pl-7 pr-5">
            <div className="admin-dashboard-head pt-7">
                <h2 className="text-3xl font-bold dark:font-normal">Dashboard</h2>
                <h3 className="text-md text-orange-700 dark:text-green-400">Welcome to your dashboard</h3>
            </div>

            <InformationCards />
            <AdminDashboardOrders />
            <AdminDashboardSales />
      
        </div>
    );
};

export default AdminDashboard