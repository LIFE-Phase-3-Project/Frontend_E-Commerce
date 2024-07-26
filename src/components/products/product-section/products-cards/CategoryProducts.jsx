import { useSelector } from "react-redux";
import { ProductCards } from "./ProductCards";
import { useEffect, useState } from "react";
import { useGetCategoryByIdQuery } from "../../../../redux/api/categoriesApi";

export const CategoryProducts = ({categoryId}) => {
    const [category, setCategory] = useState(null)
    const filters = useSelector((state) => state.filters.filters);

    const { data, error, isLoading } = useGetCategoryByIdQuery(categoryId,filters);

    useEffect(() => {
        data && setCategory(data[0]?.products)
    }, [data])

    return (
        <ProductCards data={category} error={error} isLoading={isLoading}/>
    )
}