import { BrandsScroll } from "./BrandsScroll"
import { ProductsScroll } from "./ProductsScroll"

export const HomeScroll = () => {
    return (
        <div className="home-scroll">
            <BrandsScroll />
            <ProductsScroll />
        </div>
    )
}