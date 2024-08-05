import { useEffect } from "react"
import i18n from "../../../i18n/i18n"
import { useTranslation } from "react-i18next"

export const HomeStoreLeft = () => {
    const { t, i18n } = useTranslation()

    useEffect(() => {
        i18n.changeLanguage(navigator.language);
    }, [i18n])
    return (
        <div className="home-store-left py-6 px-8 rounded-md
                            lg:mr-5">
            <h3 className="text-2xl text-green-dark dark:text-pink-light">{t("homeDiscoverTitle")}</h3>
            <p className="mt-3 text-green-medium dark:text-pink-light opacity-90">{t("homeDiscoverFirstDescription")}</p>
            <p className="mt-2 text-green-medium dark:text-pink-light opacity-90">{t("homeDiscoverSecondDescription")}</p>
        </div>
    )
}