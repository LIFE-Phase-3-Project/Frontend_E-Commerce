import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const ProductsLowStock = ({ data, containerVariants }) => {
    const [lowStockProducts, setLowStockProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const handlePrevPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        const maxPage = Math.ceil(lowStockProducts.length / itemsPerPage);
        setCurrentPage(prevPage => Math.min(prevPage + 1, maxPage));
    };

    const paginatedLowStockProducts = lowStockProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
    };

    useEffect(() => {
        if (data) {
            setLowStockProducts(
                data.items.filter(
                    product => product.stock > 0 && product.stock <= 5
                )
            );
        }
    }, [data]);

    const totalPages = Math.ceil(lowStockProducts.length / itemsPerPage);

    return (
        <motion.div className="products-low-stock flex flex-col h-[500px] p-6 rounded-lg shadow-lg bg-white dark:bg-admin-sidebar-color" variants={itemVariants}>
            <h2 className="text-2xl font-semibold text-yellow-600 mb-4">Low Stock Products</h2>
            <div className="flex-1 overflow-auto">
                {paginatedLowStockProducts.length > 0 ? (
                    <motion.ul className="space-y-3" initial="hidden" animate="visible" variants={containerVariants}>
                        {paginatedLowStockProducts.map(product => (
                            <motion.li key={product.id} className="flex items-center justify-between p-3 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 rounded-lg" variants={itemVariants}>
                                <Link to={`/dashboard/products/${product.id}`}>{product.title}</Link>
                                <span className="text-yellow-600 dark:text-yellow-500">{product.stock} left</span>
                            </motion.li>
                        ))}
                    </motion.ul>
                ) : (
                    <p className="text-gray-500">No products with low stock.</p>
                )}
            </div>
            {totalPages > 1 && (
                <div className="pagination mt-4 flex justify-center items-center space-x-4">
                    <button 
                        onClick={handlePrevPage} 
                        disabled={currentPage === 1}
                        className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 disabled:opacity-50"
                    >
                        &lt; Prev
                    </button>
                    <span className="text-gray-700 dark:text-gray-400">{currentPage} / {totalPages}</span>
                    <button 
                        onClick={handleNextPage} 
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 disabled:opacity-50"
                    >
                        Next &gt;
                    </button>
                </div>
            )}
        </motion.div>
    )
}
