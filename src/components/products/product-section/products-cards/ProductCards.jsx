import { AppError } from "../../../../helpers/AppError";
import { Loader } from "../../../../helpers/Loader";
import { useGetAllProductsQuery } from "../../../../redux/api/productsApi";
import { ProductCard } from "./ProductCard";

export const ProductCards = () => {
    const { data, error, isLoading } = useGetAllProductsQuery();

    if (isLoading) return <Loader />;
    if (error) return <AppError msg="Problems with fetching api"/>;
    
    return (
        <div className="product-cards grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-8">
            {data?.map((product) => <ProductCard key={product.id} product={product} /> )}
        </div>
    );
};
