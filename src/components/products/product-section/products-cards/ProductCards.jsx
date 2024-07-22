import { AppError } from "../../../../helpers/AppError";
import { Loader } from "../../../../helpers/Loader";
import { ProductCard } from "./ProductCard";

export const ProductCards = ({data, error, isLoading}) => {

    if (isLoading) return <Loader />;
    if (error) return <AppError msg="Problems with fetching api"/>;

    return (
        <div className="product-cards grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-8">
            {data?.map((product, key) => <ProductCard key={key} product={product}/>)}
        </div>
    );
};
