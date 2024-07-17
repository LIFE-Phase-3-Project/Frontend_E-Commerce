import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Price } from "./Price";
import { Color } from "./Color";
import { useDispatch } from "react-redux";
import { clearFilters } from "../../../../redux/slices/productsSlice";
import '../../../../i18n/i18n'

export const Filters = ({ category = "", isHamburgerActive }) => {
    const { t, i18n } = useTranslation();

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(clearFilters())
    }

    useEffect(() => {
        i18n.changeLanguage(navigator.language);
    }, [i18n]);

    return (
        <div className={`filters ${isHamburgerActive ? "fixed inset-0 overflow-y-auto" : "hidden"} md:top-20 rounded md:sticky
                            bg-white text-green-dark
                            dark:bg-custom-blue dark:text-white
                            `}>
            <div className="max-w-md mx-auto p-3">
                <h3 className="text-xl border-b-2 mb-5 p-3">{t("filterBy")}</h3>
                <h3 className="capitalize text-md bg-green-dark dark:bg-pink-dark rounded text-white p-3">{category ? category : t("categories")}</h3>
                <ul className="p-3">
                    <li className="py-2 px-3"><Link to="technology">All</Link></li>
                    <li className="py-2 px-3"><Link to={category ? `?Nenkategori=${category}` : "clothes"}>{category ? `Nenkategori: ${category}` : "Clothes"}</Link></li>
                    <li className="py-2 px-3"><Link to="technology">Technology</Link></li>
                </ul>
                <h3 className="text-md p-3 cursor-pointer">{t("brands")}</h3>
                <Color />
                <Price />
                <h3 className="text-md p-3">{t("discountedProducts")}</h3>
                <h3 className="text-md text-center p-3" onClick={handleClick}>{t("clearFilters")}</h3>
            </div>
        </div>
    );
};
