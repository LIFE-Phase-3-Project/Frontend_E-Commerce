import React, { useEffect, useState } from 'react';
import { Loader } from '../helpers/Loader';
import { AddToWishListIcon } from '../components/products/product-section/products-cards/AddToWishListIcon';
import { ProductCard } from '../components/products/product-section/products-cards/ProductCard';
import { Banner } from '../components/wishlist/Banner';
import {useGetWishListEntriesQuery} from '../redux/api/wishListApi';
import { useParams } from 'react-router-dom';

export const WishList = () => {
  const { id } = useParams();
  const [products, setProducts] = useState();
  const { data, isLoading } = useGetWishListEntriesQuery(id);

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  useEffect(() => {
  isLoading={isLoading}
  }, [isLoading]);


  if (isLoading) {
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
            {products?.map((product) => (
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



