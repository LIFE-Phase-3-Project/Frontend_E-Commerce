import { useTranslation } from 'react-i18next';
import '../../style/home.css';
import '../../i18n/i18n';
import { useEffect } from 'react';

export const HomeHead = () => {
    const { t, i18n } = useTranslation()

    useEffect(() => {
        i18n.changeLanguage(navigator.language);
    }, [i18n]);

    return (
        <div className="home-head h-dvh ">
            <div className="home-head-image h-dvh w-full relative"></div>
            <div className="home-head-content w-10/12 absolute text-white inset-1/2 -translate-x-1/2 -translate-y-1/2
                                md:w-7/12 
                                lg:w-5/12">
                <h2>E-commerce</h2>
                <p className='opacity-75'>
                    {t("homeHeadDescription")}
                </p>
            </div>
        </div>
    )
}