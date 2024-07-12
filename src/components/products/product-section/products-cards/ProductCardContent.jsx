export const ProductCardContent = ({product}) => {
    return (
        <div className="product-card-content px-1 py-4">
            <h2>{product?.title}</h2>
            <div className="product-info flex text-sm justify-between opacity-80 mt-4">
                <p className="price">&#8364;{product?.price.toFixed(2)}</p>
                <p>Rating: {product?.ratings}/5</p>
            </div>
        </div>
    )
}