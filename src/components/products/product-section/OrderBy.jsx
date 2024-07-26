import { useDispatch } from "react-redux"
// import { setFilters } from "../../../redux/slices/productsSlice";
import { useEffect } from "react";
import i18n from "../../../i18n/i18n";
import { useTranslation } from "react-i18next";
import { changeActivePage } from "../../../redux/slices/paginationSlice";
import { setFilters } from "../../../redux/slices/filtersSlice";

export const OrderBy = () => {
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();
    const orderBy = (e) => {
        dispatch(changeActivePage(1))
        dispatch(setFilters({_sort: "title", _order: e.target.value}))
    }
    
    useEffect(() => {
        i18n.changeLanguage(navigator.language)
      }, [i18n]) 

    return (
        <select onChange={orderBy} 
                className="order-by ml-5 h-full w-2/12 max-w-24 justify-end 
                            outline-green-dark
                            dark:bg-zinc-950 dark:text-white dark:outline-blue-light"
                >
            <option value="" disabled selected>{t("orderBy")}</option>
            <option value="asc">A-Z</option>
            <option value="dasc">Z-A</option>
        </select>
    )
}