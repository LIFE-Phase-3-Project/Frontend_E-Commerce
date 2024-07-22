import { useDispatch, useSelector } from "react-redux";
import { useGetAllProductsQuery } from "../../../../redux/api/productsApi";
import { ProductCards } from "./ProductCards";
import { useEffect } from "react";
import { setTotalCount } from "../../../../redux/slices/paginationSlice";

export const AllProducts = () => {
    const filters = useSelector((state) => state.products.filters);
    const { data, error, isLoading } = useGetAllProductsQuery(filters);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setTotalCount(data?.items || 1))
    }, [data])

    return (
        <ProductCards data={data?.data} error={error} isLoading={isLoading}/>
    )
}