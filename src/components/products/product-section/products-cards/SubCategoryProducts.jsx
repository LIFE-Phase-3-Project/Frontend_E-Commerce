import { useDispatch, useSelector } from "react-redux";
import { ProductCards } from "./ProductCards";
import { useEffect } from "react";
import { setProducts } from "../../../../redux/slices/productsSlice";
import { setTotalCount } from "../../../../redux/slices/paginationSlice";
import { useGetAllProductsBySubCategoryQuery } from "../../../../redux/api/productsApi";

export const SubCategoryProducts = ({ subCategoryId }) => {
    const filters = useSelector((state) => state.filters.filters);
    const { data, isLoading, error } = useGetAllProductsBySubCategoryQuery({ id: subCategoryId, filters });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setProducts(data?.items));
        dispatch(setTotalCount(data?.totalCount || 1));
    }, [data, dispatch]);

    return (
        <ProductCards data={data?.items} error={error} isLoading={isLoading} />
    );
};
