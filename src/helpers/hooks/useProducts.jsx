import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../../redux/slices/productsSlice";
import { useGetAllProductsQuery } from "../../redux/api/productsApi";

export const useProducts = (filters) => {
    const dispatch = useDispatch();
    const { data, error, isLoading } = useGetAllProductsQuery(filters);

    useEffect(() => {
        if (data) {
            dispatch(setProducts(data));
        }
    }, [data, dispatch]);

    return { data, error, isLoading };
};
