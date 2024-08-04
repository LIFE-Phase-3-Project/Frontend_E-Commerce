import { Link, useLocation, useParams } from "react-router-dom";
import { AddToWishListIcon } from "./AddToWishListIcon";
import { ProductCardImage } from "./ProductCardImage";
import { ProductCardContent } from "./ProductCardContent";
import { useSelector } from "react-redux";
import { ProductsProductCardSkeleton } from "../../../../helpers/skeletons/ProductsProductCard";

export const ProductCard = ({ isLoading, product }) => {
    const location = useLocation();
    const params = useParams();
    const pathname = location.pathname;
    const segmentList = pathname.split("/").filter(segment => segment !== "");
    const lastSegment = segmentList[segmentList.length - 1];

    console.log("produc -categoryId")
    console.log(params)

    const isUserLoggedIn = useSelector(state => state.user.isLoggedIn)
    if(isLoading) return <ProductsProductCardSkeleton />
    
    return (
        <div className="product-card relative w-64 h-96 mx-auto mt-10 lg:mt-6 flex flex-col">
            {isUserLoggedIn && <AddToWishListIcon product={product}/>}

            <Link to={`${params?.subCategory
                    ? product.id 
                    : params?.category
                        ? product.subCategoryId + "/" + product.id
                        : product.categoryId + "/" + product.subCategoryId + "/" + product.id
                    }`} className="w-full h-full flex flex-col">
                <ProductCardImage product={product}/>
                <ProductCardContent product={product}/>
            </Link>
        </div>
    );
};
