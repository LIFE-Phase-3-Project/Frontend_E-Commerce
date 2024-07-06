import React, { useEffect, useState } from "react";

export const HomeStoreRightTop = () => {
    const backgroundImages = [
        "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1712898649968-62c800f67422?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ];

    const [currentImageId, setCurrentImageId] = useState(0);
    const [currentImage, setCurrentImage] = useState(backgroundImages[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(backgroundImages[currentImageId]);
            setCurrentImageId((prevId) => (prevId + 1) % backgroundImages.length);
        }, 2000);
    
        return () => clearInterval(interval);
    }, [currentImageId, currentImage]); 
    

    return (
        <div className="home-store-right-top bg-phone-selling bg-cover bg-center bg-blend-multiply rounded my-8 p-24 text-white cursor-pointer
                            lg:m-0 lg-h"
                 style={{ backgroundImage: `url(${currentImage})` }}>
            <h3 className="text-2xl">Customer Favorites</h3>
            <p>
                Our most popular products are loved for their outstanding quality and unbeatable value
            </p>
        </div>
    );
};
