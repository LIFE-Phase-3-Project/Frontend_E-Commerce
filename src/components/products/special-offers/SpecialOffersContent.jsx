import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const SpecialOffersContent = ({ productsWithOffers, randomProductId, category = "" }) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, []);

  const linkTo = category
    ? productsWithOffers?.[randomProductId]?.id
    : `${productsWithOffers?.[randomProductId]?.category?.title}/${productsWithOffers?.[randomProductId]?.id}`;

  return (
    <div className="special-offers-content w-7/12 flex flex-col items-center">
      <h2 className="product-title text-3xl text-center w-8/12">
        {productsWithOffers && productsWithOffers[randomProductId]?.title}
      </h2>
      <h3 className="offer-time text-xl opacity-90">14 days 1 hour</h3>
      <Link
        to={productsWithOffers && linkTo}
        className="text-white text-sm mt-5 py-2 px-4 rounded bg-green-dark hover:bg-green-medium dark:bg-pink-dark dark:hover:bg-pink-medium"
      >
        {t("exploreNow")}
      </Link>
    </div>
  );
};
