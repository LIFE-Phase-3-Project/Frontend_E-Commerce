import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { setFilters } from "../../../redux/slices/filtersSlice";
import { changeActivePage } from "../../../redux/slices/paginationSlice";
import { useDebounce } from "../../../helpers/hooks/useDebounce";

export const Search = () => {
    const [focusInput, setFocusInput] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    const { t, i18n } = useTranslation();

    const dispatch = useDispatch();

    const handleFocus = () => setFocusInput(true);
    const handleBlur = () => setFocusInput(false);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        i18n.changeLanguage(navigator.language);
    }, [i18n]);

    useEffect(() => {
        dispatch(changeActivePage(1));
        dispatch(setFilters({ SearchTerm: debouncedSearchTerm }));
    }, [debouncedSearchTerm, dispatch]);

    return (
        <div className={`search flex items-center rounded w-9/12 sm:w-6/12 h-full border-2
                            md:w-6/12
                            lg:w-5/12 lg:max-w-md
                            text-green-dark bg-white
                            dark:text-dark-green-dark dark:bg-zinc-950
                            ${focusInput 
                                ? "border-green-dark dark:border-gray-700" 
                                : "border-green-light-low-opacity dark:border-gray-800"
                            }
                        `}>
            <input
                type="text"
                placeholder={t("searchForAProductInput")}
                onFocus={handleFocus}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-11/12 h-full pl-3 rounded-s bg-transparent outline-none"
            />
            <CiSearch className="w-1/12" size={"80%"} />
        </div>
    );
};
