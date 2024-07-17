import { useEffect } from "react";
import { AppError } from "../../../../helpers/AppError";
import { Loader } from "../../../../helpers/Loader";
import { useGetAllProductsQuery } from "../../../../redux/api/productsApi";
import { setProducts } from "../../../../redux/slices/productsSlice";
import { ProductCard } from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";

export const ProductCards = () => {
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.products.filters);

    const { data, error, isLoading } = useGetAllProductsQuery(filters);

    useEffect(() => {
        if (data) {
            dispatch(setProducts(data));
        }
    }, [data, dispatch]);

    if (isLoading) return <Loader />;
    if (error) return <AppError msg="Problems with fetching api"/>;

    return (
        <div className="product-cards grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-8">
            {data?.map((product) => <ProductCard key={product.id} product={product} /> )}
        </div>
    );
};
