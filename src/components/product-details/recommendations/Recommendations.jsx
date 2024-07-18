import React, { useEffect, useState } from 'react';

const Recommendations = () => {
    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:8000/products'); 
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data)
            return data; 
           
        } catch (error) {
            console.error('Error fetching data:', error);
            return []; 
        }
        
    };

    const [recommendedProducts, setRecommendedProducts] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const products = await fetchProducts();
            setRecommendedProducts(products);
        };
        fetchData();

        if (!recommendedProducts || !Array.isArray(recommendedProducts)) {
            return <div>Loading...</div>;}
    }, []); 

    return (
        <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4 dark:text-cream">Recommended Products</h2>
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-4"> 
                {recommendedProducts.map((product) => (
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
