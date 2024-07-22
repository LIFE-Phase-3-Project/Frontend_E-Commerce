import LaCosteTshirt from "../../../../assets/images/products/tshirt-2.png";
import BlackTshirt from "../../../../assets/images/products/black-tshirt.png";

export const ProductCardImage = ({product}) => {
    const listWithProducts = [LaCosteTshirt, BlackTshirt, LaCosteTshirt, BlackTshirt, BlackTshirt,LaCosteTshirt, BlackTshirt, LaCosteTshirt, BlackTshirt, BlackTshirt, LaCosteTshirt, BlackTshirt, LaCosteTshirt, BlackTshirt, LaCosteTshirt,BlackTshirt];

    return (
        <div className="bg-image-color h-full">
            <div
                className="product-card-img h-full bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${listWithProducts[product.id - 1]})` }}
            ></div>
        </div>
    )
}