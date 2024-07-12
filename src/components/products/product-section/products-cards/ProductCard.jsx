import { Link } from "react-router-dom";
import { AddToWishListIcon } from "./AddToWishListIcon";
import { ProductCardImage } from "./ProductCardImage";
import { ProductCardContent } from "./ProductCardContent";

export const ProductCard = ({ product }) => {
    return (
        <div className="product-card relative w-64 h-96 mx-auto mt-10 lg:mt-6 flex flex-col">
            <AddToWishListIcon product={product}/>

            <Link to={`${product.id}`} className="w-full h-full flex flex-col">
                <ProductCardImage product={product}/>
                <ProductCardContent product={product}/>
            </Link>
        </div>
    );
};
