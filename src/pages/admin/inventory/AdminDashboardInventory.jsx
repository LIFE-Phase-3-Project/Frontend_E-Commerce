import { useGetAllProductsQuery } from '../../../redux/api/productsApi';
import { motion } from 'framer-motion';
import { ProductsOutOfStock } from '../../../components/admin/dashboard/ProductsOutOfStock';
import { ProductsLowStock } from '../../../components/admin/dashboard/ProductsLowStock';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export const AdminDashboardInventory = () => {
    const location = useLocation();
    const { data, refetch } = useGetAllProductsQuery({ pageSize: 100 });

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } }
    };

    useEffect(() => {
        refetch();
    }, [location, refetch]);

    return (
        <div className="p-10">
            <div className="inventory-head mb-10">
                <h2 className="text-4xl font-bold text-center mt-5 text-green-600 dark:text-green-400">Inventory Dashboard</h2>
                <p className="text-center text-lg text-gray-500">Manage your product inventory effectively</p>
            </div>

            <motion.div 
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="inventory-body grid grid-cols-1 md:grid-cols-2 gap-12"
            >
                <ProductsOutOfStock data={data} containerVariants={containerVariants}/>
                <ProductsLowStock data={data} containerVariants={containerVariants}/>
            </motion.div>
        </div>
    );
};
