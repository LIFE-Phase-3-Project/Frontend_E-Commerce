import React, { useEffect, useState } from 'react';
import { useGetAllProductsQuery } from '../../../redux/api/productsApi';

const Recommendations = () => {
    const { data } = useGetAllProductsQuery();
    const [recommendedProducts, setRecommendedProducts] = useState([]);


    useEffect(() => {
        setRecommendedProducts(data?.items && data?.items.slice(0,3));
    }, [data]); 

    return (
        <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4 dark:text-cream">Recommended Products</h2>
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-4"> 
                {recommendedProducts?.map((product) => (
                    <div key={product.id} className="border rounded-lg p-4">
                        <img src={product.image[0]} alt={product.title} className="w-full mb-2 rounded-lg" />
                        <p className="text-sm text-gray-700 dark:text-cream">{product.title}</p>
                        <p className="text-sm text-gray-500 dark:text-cream">${product.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recommendations;