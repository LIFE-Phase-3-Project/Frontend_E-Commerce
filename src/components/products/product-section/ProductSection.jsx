import { AllProducts } from "./products-cards/AllProducts"
import { CategoryProducts } from "./products-cards/CategoryProducts"
import { useDispatch } from "react-redux"
import { OrderBy } from "./OrderBy"
import { ProductSectionLeft } from "./ProductSectionLeft"
import { Search } from "./Search"
import { useEffect } from "react"
import { setFilters } from "../../../redux/slices/productsSlice"
import { Pagination } from "./Pagination/Pagination"
import { setPaginationValues } from "../../../redux/slices/paginationSlice"

export const ProductSection = ({category=""}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPaginationValues({activePage: 1, postsPerPage: 12}))
        dispatch(setFilters({ _page: 1, _per_page: 12 }))
    },[])

    return (
        <div id="product-section" className="product-section flex justify-between pt-24 px-4">
            <ProductSectionLeft category={category}/>
            <div className="product-section-right">
                <div className="product-section-right-top h-9 flex items-start justify-center">
                    <Search />
                    <OrderBy />
                </div>

                { category 
                    ? <CategoryProducts categoryId={category}/>
                    :  <AllProducts /> 
                }
                <Pagination />
            </div>
        </div>
    )
}