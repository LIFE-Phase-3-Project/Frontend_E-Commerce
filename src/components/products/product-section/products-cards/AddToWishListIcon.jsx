import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { useState, useEffect } from "react";

export const AddToWishListIcon = ({ product }) => {
    const [isWishlistIconActive, setIsWishlistIconActive] = useState(false);

    useEffect(() => {
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const isProductInWishlist = wishlist.some(item => item.id === product.id);
        
        setIsWishlistIconActive(isProductInWishlist);
    }, [product.id]);

    const handleWishlistIcon = () => {
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

        if (isWishlistIconActive) {
            const updatedWishlist = wishlist.filter(item => item.id !== product.id);
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        } else {
            wishlist.push(product);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
        }

        setIsWishlistIconActive(!isWishlistIconActive);
    };

    return (
        <div className="add-to-wishlist-icon absolute top-2 right-3" onClick={handleWishlistIcon}>
            {isWishlistIconActive
                ? <IoHeartSharp size={25} className="wishlist-icon-active cursor-pointer" />
                : <IoHeartOutline size={25} className="wishlist-icon cursor-pointer text-black dark:text-gray-200" />
            }
        </div>
    )
}
