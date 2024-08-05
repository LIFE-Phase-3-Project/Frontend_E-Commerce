import { useDispatch, useSelector } from "react-redux";
import { useGetAllProductsQuery } from "../../../../redux/api/productsApi";
import { ProductCards } from "./ProductCards";
import { useEffect } from "react";
import { setTotalCount } from "../../../../redux/slices/paginationSlice";
import { setProducts } from "../../../../redux/slices/productsSlice";

export const AllProducts = () => {
    const filters = useSelector((state) => state.filters.filters);
    const { data, error, isLoading } = useGetAllProductsQuery(filters);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setProducts(data))
        dispatch(setTotalCount(data?.totalCount || 1))
    }, [data])

    return (
        <ProductCards data={data?.items} error={error} isLoading={isLoading}/>
    )
}