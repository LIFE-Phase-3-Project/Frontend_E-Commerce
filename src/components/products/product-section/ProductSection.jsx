import { AllProducts } from "./products-cards/AllProducts"
import { CategoryProducts } from "./products-cards/CategoryProducts"
import { useDispatch } from "react-redux"
import { OrderBy } from "./OrderBy"
import { ProductSectionLeft } from "./ProductSectionLeft"
import { Search } from "./Search"
import { useEffect } from "react"
import { Pagination } from "./Pagination/Pagination"
import { setPaginationValues } from "../../../redux/slices/paginationSlice"
import { setFilters } from "../../../redux/slices/filtersSlice"
import { SubCategoryProducts } from "./products-cards/SubCategoryProducts"

export const ProductSection = ({category="", subCategory=""}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPaginationValues({ page: 1, pageSize: 12 }))
        dispatch(setFilters({ page: 1, pageSize: 12 }))
    },[])

    return (
        <div id="product-section" className="product-section flex justify-between pt-24 px-4">
            <ProductSectionLeft category={category} subCategory={subCategory}/>
            <div className="product-section-right">
                <div className="product-section-right-top h-9 flex items-start justify-center">
                    <Search />
                    <OrderBy />
                </div>

                {
                    subCategory 
                    ?
                        <SubCategoryProducts subCategoryId={subCategory}/>
                    :
                    category 
                        ? <CategoryProducts categoryId={category}/>
                        :  <AllProducts /> 
                }
                <Pagination />
            </div>
        </div>
    )
}