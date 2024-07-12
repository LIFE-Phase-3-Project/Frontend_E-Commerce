import { OrderBy } from "./OrderBy"
import { ProductCards } from "./products-cards/ProductCards"
import { ProductSectionLeft } from "./ProductSectionLeft"
import { Search } from "./Search"

export const ProductSection = ({category=""}) => {
    return (
        <div className="product-section flex justify-between mt-24 px-4">
            <ProductSectionLeft category={category}/>
            <div className="product-section-right">
                <div className="product-section-right-top h-9 flex items-start justify-center">
                    <Search />
                    <OrderBy />
                </div>

                <ProductCards />
            </div>
        </div>
    )
}