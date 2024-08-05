import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import '../../../../i18n/i18n'

export const ProductCardContent = ({ product }) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, [i18n]);

  return (
    <div className="product-card-content px-1 py-4 text-black dark:text-white">
      <h2>{product?.title}</h2>
      <div className="product-info flex flex-wrap text-sm justify-between opacity-80 mt-5">
        <p className="price w-full sm:w-6/12">&#8364;{product?.price.toFixed(2)}</p>
        <p className="w-full sm:w-6/12 flex justify-end">{t("rating")}: {product?.ratings}/5</p>
      </div>
    </div>
  );
};
