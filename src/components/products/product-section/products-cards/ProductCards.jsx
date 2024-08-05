import { AppError } from "../../../../helpers/AppError";
import { ProductCard } from "./ProductCard";

export const ProductCards = ({ data, error, isLoading }) => {
    if (error) return <AppError msg="Something went wrong. Please try again!" />;

    return (
        <div className="product-cards grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-8">
            {isLoading
                ? [...Array(12)].map((_, key) => <ProductCard isLoading={isLoading} key={key} />)
                : data?.map((product, key) => <ProductCard isLoading={isLoading} key={key} product={product} />)}
        </div>
    );
};
