import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import ReactImageGallery from "react-image-gallery";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart, faTruck } from '@fortawesome/free-solid-svg-icons';
import ReviewSection from "../components/product-details/review/ReviewSection";
import Recommendations from "../components/product-details/recommendations/Recommendations";
import { useGetProductByIdQuery, } from "../redux/api/productsApi";
import { Modal } from '../helpers/Modal'
import {  useAddItemToCartMutation, useUpdateQuantityMutation, } from "../redux/api/shoppingCartApi";
import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const ProductDetail = () => {
  const [productDetailItem, setProductDetailItem] = useState(null);
  const [addItemToCart] = useAddItemToCartMutation();
  const [updateQuantity] = useUpdateQuantityMutation();
  const [orderNumber, setOrderNumber] = useState(1);
  const { id } = useParams();
  const { t, i18n } = useTranslation();

  const { data, isLoading: loading } = useGetProductByIdQuery(id);

  useEffect(() => {
    if (data) {
      setProductDetailItem(data);
    }
  }, [data]);

  async function addToCart(product){
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    const productIndex = currentCart.findIndex(item => item.id === product.id);
    

    if (productIndex > -1) {
      currentCart[productIndex].quantity += orderNumber;
    } else {
      currentCart.push({ ...product, quantity: orderNumber });
    }

    localStorage.setItem('cart', JSON.stringify(currentCart));

    const sendId = product.id;
    try {
      const response = await addItemToCart(sendId).unwrap();
      const quantityResponse = await updateQuantity({sendId, orderNumber}).unwrap();
      <Modal msg={"Item added successfully."}/>;
      console.log("Quantity added: " , quantityResponse);
      
    } catch (error) {
      console.error('Failed to update user:', error);
      console.log("Failed to update quantity: " , error);
      
    }
  };

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
}, [i18n]);



  const increment = () => {
    setOrderNumber(prevNumber => prevNumber + 1);
  };

  const decrement = () => {
    setOrderNumber(prevNumber => (prevNumber > 1 ? prevNumber - 1 : 1));
  };

  if (loading || !productDetailItem) {
    return <div>Loading...</div>;
  }

  const images = productDetailItem?.images?.map(image => ({
    original: image,
    thumbnail: image
  })) || [];

  const plusMinuceButton =
  "flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500";
  if (loading || !productDetailItem) {
    return <div>Loading...</div>;
  }

  return (
    <section className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10">
      <div className={`container mx-auto px-4`}>
        <ReactImageGallery
          showBullets={false}
          showFullscreenButton={false}
          showPlayButton={false}
          items={images}
        />
      </div>

      <div className="mx-auto px-5 lg:px-5 dark:text-cream">
        <h2 className="pt-3 text-2xl font-bold lg:pt-0 dark: text-cream">
          {productDetailItem?.title}
        </h2>
        <div className="mt-1">
          <div className="flex items-center">
            <Rater
              style={{ fontSize: "20px" }}
              total={5}
              interactive={true}
              rating={productDetailItem?.rating || 0}
            />
            <p className="ml-3 text-sm text-gray-400">
              ({productDetailItem?.reviewsCount || 0})
            </p>
          </div>
        </div>
        <p className="mt-5 font-bold">
        {t('Availability')}{" "}
          {productDetailItem?.stock ? (
            <span className="text-green-600">In Stock </span>
          ) : (
            <span className="text-red-600">Out of Stock</span>
          )}
        </p>
        <p className="font-bold">
        {t("category")}{" "}
          <span className="font-normal">{productDetailItem?.category?.title}</span>
        </p>
        <p className="mt-4 text-4xl font-bold text-custom-green">
          ${productDetailItem?.price}{" "}
        </p>
        <p className="mt-5 font-bold">
          {productDetailItem?.location?.country === "Kosove" ? (
            <span className="text-red-600 text-sm">Next Day Delivery  <FontAwesomeIcon icon={faCartShopping} /></span>
          ) : null}
        </p>
        <p className="pt-5 text-sm leading-5 text-gray-500">
          {productDetailItem?.description}
        </p>
        <div className="mt-6">
          <p className="pb-2 text-xs text-gray-500">Size</p>
          <div className="flex gap-1">
            {productDetailItem?.sizes?.map((size, index) => (
              <div
                key={index}
                className="h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <p className="pb-2 text-xs text-gray-500">Quantity</p>
          <div className="flex">
            <button className={`${plusMinuceButton}`} onClick={decrement}>−</button>
            <div className="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500">
              {orderNumber}
            </div>
            <button className={`${plusMinuceButton}`} onClick={increment}>+</button>
          </div>
        </div>
        <div className="mt-7 flex flex-row items-center gap-6">
          <button
            className="flex h-12 w-1/3 items-center justify-center bg-custom-purple text-white duration-100 hover:bg-on-hover-purple"
            onClick={() => addToCart(productDetailItem)}  
          >
            <FontAwesomeIcon icon={faTruck} />
            {t("addToCart")}
          </button>
          <button className="flex h-12 w-1/3 items-center justify-center bg-light-pink duration-100 hover:bg-on-hover-pink">
            <FontAwesomeIcon icon={faHeart} />
            {t("wishlist")}
          </button>
        </div>
      </div>
      <ReviewSection userId={productDetailItem?.id}/> 
      <Recommendations />
    </section>
  );
};

export default ProductDetail;
