import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import ReactImageGallery from "react-image-gallery";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import ReviewSection from "../components/home/review/ReviewSection";

const ProductDetail = () => {
    const [productDetailItemStock, setProductDetailItem] = useState({
        stock: 1
    });
//dummydata to be replaced when the api comes
  const productDetailItem = {
    images: [
      {
        original:
          "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
        thumbnail:
          "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        original:
          "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
        thumbnail:
          "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        original:
          "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
        thumbnail:
          "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ],
    title: "Product title",
    reviews: "150",
    availability: true,
    category: "camera",
    price: 450,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem exercitationem voluptate sint eius ea assumenda provident eos repellendus qui neque! Velit ratione illo maiores voluptates commodi eaque illum, laudantium non!",
    size: ["S", "M", "L", "XL", "XXL"],//depending on thw product
    color: ["gray", "violet", "red"],//depending on the product
    stock: 1,
    nextDayShipping: true
    
  }
 
  const plusMinuceButton =
    "flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500";
 
    const increment = () => {
        setProductDetailItem(prevState => ({
          ...prevState,
          stock: prevState.stock++
        }));
        console.log(productDetailItem.stock);
      };

      const decrement = () =>{
        setProductDetailItem(prevState => ({
            ...prevState,
            stock: prevState.stock--
          
          }));
      }


    //   useEffect(() => {
    //     console.log(`Stock changed to: ${productDetailItem.stock}`);
    //     // Any other side effects you want to perform when stock changes
    //   }, [productDetailItem.stock]);

 

    return (
      <div>
    <section className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10">
      {/* image gallery from library */}
      <div className={`container mx-auto px-4`}>
        <ReactImageGallery
          showBullets={false}
          showFullscreenButton={false}
          showPlayButton={false}
          items={productDetailItem.images}
        />

    
      </div>
    

      <div className="mx-auto px-5 lg:px-5">
        <h2 className="pt-3 text-2xl font-bold lg:pt-0">
          {productDetailItem.title}
        </h2>
        <div className="mt-1">
          <div className="flex items-center">
            <Rater
              style={{ fontSize: "20px" }}
              total={5}
              interactive={true}
              rating={3.5}
            />

            <p className="ml-3 text-sm text-gray-400">
              ({productDetailItem.reviews})
            </p>
          </div>
        </div>
        <p className="mt-5 font-bold">
          Availability:{" "}
          {productDetailItem.availability ? (
            <span className="text-green-600">In Stock </span>
          ) : (
            <span className="text-red-600">Expired</span>
          )}
        </p>
        <p className="font-bold">
          Cathegory:{" "}
          <span className="font-normal">{productDetailItem.category}</span>
        </p>
        <p className="mt-4 text-4xl font-bold text-custom-green">
          ${productDetailItem.price}{" "}
         
        </p>
        <p className="mt-5 font-bold">
          
          {productDetailItem.nextDayShipping ? (
            <span className="text-red-600 text-sm">Next Day Delivery  <FontAwesomeIcon icon={faCartShopping} /></span>
          ) : <></>}
        </p>
        <p className="pt-5 text-sm leading-5 text-gray-500">
          {productDetailItem.description}
        </p>
        <div className="mt-6">
          <p className="pb-2 text-xs text-gray-500">Size</p>
          <div className="flex gap-1" >
            {productDetailItem.size.map((x, index) => {
              return (
                <div
                  key={index}
                  className={`  h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500`} 
                >
                  {x}
                </div>
              );
            })}
          </div>
        </div>
      
        <div className="mt-6">
          <p className="pb-2 text-xs text-gray-500">Quantity</p>
          <div className="flex">
            <button className={`${plusMinuceButton}` }  onClick={decrement}>−</button>
            <div className="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500" >
              {productDetailItemStock.stock}
            </div>
            <button className={`${plusMinuceButton}`} onClick={increment}> +</button>
          </div>
        </div>
        <div className="mt-7 flex flex-row items-center gap-6">
          <button className="flex h-12 w-1/3 items-center justify-center bg-custom-purple text-white duration-100 hover:bg-on-hover-purple">
          <FontAwesomeIcon icon= {faTruck} />
            Add to cart
          </button>
          <button className="flex h-12 w-1/3 items-center justify-center bg-light-pink duration-100 hover:bg-on-hover-pink">
          <FontAwesomeIcon icon={faHeart} />
            Wishlist
          </button>
        </div>
      </div>
     
    </section>
     <ReviewSection/>
     </div>
 
  );
};

export default ProductDetail;