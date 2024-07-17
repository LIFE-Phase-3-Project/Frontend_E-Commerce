import { useEffect, useState, useMemo } from "react";
import { useGetAllProductsQuery } from "../../../redux/api/productsApi";
import { SpecialOffersContent } from "./SpecialOffersContent";
import { SpecialOffersImage } from "./SpecialOffersImage";
import { useHandleMouseMove } from "./useHandleMouseMove";
import { OfferDiscount } from "./OfferDiscount";
import { useCardStyles } from "./useCardStyles";
import { Loader } from "../../../helpers/Loader";
import { AppError } from "../../../helpers/AppError";

export const SpecialOffers = () => {
    const { data, error, isLoading } = useGetAllProductsQuery();
    const [randomProductId, setRandomProductId] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMouseInside, setIsMouseInside] = useState(false); 

    const handleMouseMove = useHandleMouseMove(setMousePosition);
    const cardStyles = useCardStyles(mousePosition);
  
    const productsWithOffers = useMemo(() => data?.slice(0, 3), [data]);
  
    useEffect(() => {
        if (productsWithOffers && productsWithOffers.length > 0 && !isMouseInside) { 
            const timeoutId = setTimeout(() => {
                setRandomProductId((id) => (id + 1) % productsWithOffers.length);
            }, 1500);
    
            return () => clearTimeout(timeoutId);
        }
    }, [productsWithOffers, randomProductId, isMouseInside]); 
  
    if (isLoading) return <Loader />;
    if (error) return <AppError msg={"Error loading products"}/> 

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsMouseInside(true)} 
            onMouseLeave={() => setIsMouseInside(false)} 
            className="special-offers box-border overflow-hidden relative w-11/12 m-auto h-80 flex items-center justify-between rounded-lg md:w-10/12 lg:max-w-7xl lg:w-7/12
                        text-green-dark bg-gradient-to-r from-green-extra-light to-white
                        dark:text-pink-dark dark:bg-gradient-to-r dark:from-pink-extra-light dark:to-white"
            style={cardStyles}
        >
            <OfferDiscount />
            <SpecialOffersContent productsWithOffers={productsWithOffers} randomProductId={randomProductId}/>
            <SpecialOffersImage productsWithOffers={productsWithOffers} randomProductId={randomProductId}/>      
        </div>
    );
};
