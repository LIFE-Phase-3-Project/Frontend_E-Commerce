import { useEffect } from "react";
import { Link } from "react-router-dom";
import i18n from "../../../i18n/i18n";
import { useTranslation } from "react-i18next";

export const SpecialOffersContent = ({productsWithOffers, randomProductId}) => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
      i18n.changeLanguage(navigator.language)
    },[]) 
    return (
        <div className="special-offers-content w-7/12 flex flex-col items-center">
          <h2 className="product-title text-3xl text-center w-8/12">
            {productsWithOffers && productsWithOffers[randomProductId]?.title}
          </h2>
          <h3 className="offer-time text-xl opacity-90">14 days 1 hour</h3>
          <Link
            to={`${productsWithOffers && productsWithOffers[randomProductId]?.id}`}
            className="text-white text-sm mt-5 py-2 px-4 rounded
                        bg-green-dark hover:bg-green-medium
                        dark:bg-pink-dark dark:hover:bg-pink-medium"
          >
            {t("exploreNow")}
          </Link>
        </div>
    )
}