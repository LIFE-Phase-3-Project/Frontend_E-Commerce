import { t } from "i18next"
import { useEffect } from "react"
import i18n from "../../../i18n/i18n"
import { useTranslation } from "react-i18next"

export const HomeStoreRightBottom = () => {
    const { t, i18n } = useTranslation()

    useEffect(() => {
        i18n.changeLanguage(navigator.language)
    }, [i18n])
    return (
        <div className="home-store-right-bottom p-8 rounded-md lg:mt-5">
            <h3 className="text-2xl mb-3 text-green-dark dark:text-pink-light">{t("homeNewArrivals")}</h3>
            <p className="my-1 text-green-medium dark:text-pink-light">{t("homeNewArrivalsFirstDescription")}</p>
            <p className="text-green-medium dark:text-pink-light">{t("homeNewArrivalsSecondDescription")}</p>
        </div>
    )
}