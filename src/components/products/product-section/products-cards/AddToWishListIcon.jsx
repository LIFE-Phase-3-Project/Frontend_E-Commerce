import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useAddWishListEntryMutation, useGetWishListEntriesQuery } from "../../../../redux/api/wishListApi";

export const AddToWishListIcon = ({ product }) => {
    const [isWishlistIconActive, setIsWishlistIconActive] = useState(false);
    const [addWishListEntry] = useAddWishListEntryMutation();

    const {data: wishlist} = useGetWishListEntriesQuery();
    
    useEffect(() => {
        const isProductInWishlist = wishlist && wishlist.some(item => item.productId === product.id);

        setIsWishlistIconActive(isProductInWishlist);
    }, [product.id]);

    const handleWishlistIcon = async () => {
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

        if (isWishlistIconActive) {
            const updatedWishlist = wishlist.filter(item => item.id !== product.id);
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        } else {
            wishlist.push(product);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            try {
                await addWishListEntry(product.id, product).unwrap();
                setIsWishlistIconActive(true);
            } catch (error) {
                console.error('Failed to add to wishlist: ', error);
            }
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
    );
};
