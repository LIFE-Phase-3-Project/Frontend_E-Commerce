import { useEffect, useState } from "react";
import '../../../i18n/i18n'
import { useTranslation } from "react-i18next";

export const ExploreLeft = () => {
    const [isFocused, setIsFocused] = useState(false);
    const { t, i18n } = useTranslation(); 

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);


    useEffect(() => {
        i18n.changeLanguage(navigator.language);
    }, [i18n]);

    return (
        <div className="explore-left max-w-xlg px-2 order-2 
                            md:order-1 md:w-5/12">

            <h3 className="text-2xl 
                            md:mt-0 md:w-3/3
                            lg:w-10/12">
                {t("findJoiDescription")}
            </h3>

            <div className={`explore-left-search h-8 box-border w-10/12 mt-7 flex items-center ${isFocused ? "border-2" : "border"} border-green-dark text-green-dark 
                                md:w-11/12
                                dark:border-blue-dark dark:text-blue-300
                                `}>

                <input type="text"
                    placeholder={t("searchForAProductInput")}
                    className="w-10/12 pl-2 outline-0 h-full bg-transparent" 
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />

                <button className='h-full px-2 w-3/12 text-white bg-green-700 dark:bg-blue-extra-dark hover:bg-green-800 
                                    lg:w-3/12'>
                    {t("search")}
                </button>
            </div>

        <p className='text-gray-700 dark:text-gray-300 opacity-60 mt-2'>{t("findJoiSearchDesc")}</p>
    </div>
    )
}