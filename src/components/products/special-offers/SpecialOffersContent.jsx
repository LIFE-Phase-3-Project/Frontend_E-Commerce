import { Link } from "react-router-dom";

export const SpecialOffersContent = ({productsWithOffers, randomProductId}) => {
    return (
        <div className="special-offers-content w-7/12 flex flex-col items-center">
          <h2 className="product-title text-3xl text-center w-8/12">
            {productsWithOffers && productsWithOffers[randomProductId]?.title}
          </h2>
          <h3 className="offer-time text-xl opacity-90">14 days 1 hour</h3>
          <Link
            to={`${productsWithOffers && productsWithOffers[randomProductId]?.id}`}
            className="bg-green-dark text-white text-sm mt-5 py-2 px-4 rounded hover:bg-green-medium"
          >
            Explore now
          </Link>
        </div>
    )
}