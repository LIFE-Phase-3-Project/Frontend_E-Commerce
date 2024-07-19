import React, { useEffect, useState } from 'react';
import { Loader } from '../helpers/Loader';
import { AddToWishListIcon } from '../components/products/product-section/products-cards/AddToWishListIcon';
import { ProductCard } from '../components/products/product-section/products-cards/ProductCard';
import { Banner } from '../components/wishlist/Banner';

export const WishList = () => {
  const fetchProducts = async (wishlistId) => {
    try {
      const response = await fetch(`http://localhost:8000/wishlists/${wishlistId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

     
      const productIds = data.products;

      
      const products = await Promise.all(productIds.map(async (productId) => {
        const productResponse = await fetch(`http://localhost:8000/products/${productId}`);
        if (!productResponse.ok) {
          throw new Error(`Failed to fetch product with ID ${productId}`);
        }
        return productResponse.json();
      }));

      return products;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        //to be replaced after user creation
        const userId = 2; 
        const wishlistId = 1; 

        const fetchedProducts = await fetchProducts(wishlistId);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  if (loading) {
   <Loader/>
  }

  return (
   
    <div className="min-h-screen mt-40 bg-gray-100 py-6 px-4 sm:px-6 lg:px-8 dark:bg-background-blue dark:text-cream">
      <Banner/>
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-md flex flex-col items-center justify-center mt-10 mb-6 rounded-lg px-6 py-4 dark:bg-background-blue dark:shadow- dark:shadow-cream dark:text-cream">
          <h2 className="text-3xl font-semibold  text-gray-800  dark:text-cream">Your WishList</h2>
          <p className="text-gray-600 mb-4 dark:text-cream">Ready to buy?</p>
         
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 dark:bg-background-blue dark:border-cream">
            {products.map((product) => (
             <div>
             <ProductCard product={product}/>
             <button className="bg-custom-purple w-full hover:bg-on-hover-purple  hover:scale-110 text-white px-4 py-2 rounded-md transition duration-300">
             Add to Cart
           </button>
           </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};



