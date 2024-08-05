import { useDispatch, useSelector } from "react-redux";
import { ProductCards } from "./ProductCards";
import { useGetAllProductsQuery } from "../../../../redux/api/productsApi";
import { useEffect } from "react";
import { setProducts } from "../../../../redux/slices/productsSlice";
import { setTotalCount } from "../../../../redux/slices/paginationSlice";

export const CategoryProducts = ({categoryId}) => {
    const filters = useSelector((state) => state.filters.filters);
    const { data, isLoading, error } = useGetAllProductsQuery({ CategoryId: categoryId ,...filters});
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setProducts(data))
        dispatch(setTotalCount(data?.totalCount || 1))
    }, [data])

    return (
        <ProductCards data={data?.items} error={error} isLoading={isLoading}/>
    )
}