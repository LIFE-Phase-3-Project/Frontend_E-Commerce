import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Color } from "./colors/FilterByColor";
import { useDispatch, useSelector } from "react-redux";
import { clearFilters } from "../../../../redux/slices/productsSlice";
import '../../../../i18n/i18n'
import { FilterByCategory } from "./category/FilterByCategory";
import { FilterBySubCategory } from "./subcategory/FilterBySubCategories";
import { Price } from "./price/Prices";
import { FilterByBrands } from "./brands/FilterByBrands";

export const Filters = ({ category = "", isHamburgerActive }) => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const { activePage, postsPerPage } = useSelector(state => state.pagination);


    const handleClick = () => {
        dispatch(clearFilters({activePage, postsPerPage}));
    };

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
                {
                    category 
                    ? <FilterBySubCategory category={category} t={t} />
                    : <FilterByCategory category={category} t={t}/>
                }
                <FilterByBrands t={t}/>
                <Color />
                <Price />
                <h3 className="text-md p-3">{t("discountedProducts")}</h3>
                <h3 className="text-md text-center p-3" onClick={handleClick}>{t("clearFilters")}</h3>
            </div>
        </div>
    );
};
