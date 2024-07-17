import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import '../../../../i18n/i18n'

export const Color = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(navigator.language);
    }, [i18n]);

    return (
        <h3 className="text-md p-3">{t("color")}</h3>
    )
}