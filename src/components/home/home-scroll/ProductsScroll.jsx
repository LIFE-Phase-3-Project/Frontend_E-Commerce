import Apple from '../../../assets/images/logos/apple-logo.png';
import Porsche from '../../../assets/images/logos/porsche-logo.png'
import Rolex from '../../../assets/images/logos/rolex-logo.png'
import LaCoste from '../../../assets/images/logos/la-coste-logo.png'
import Nike from '../../../assets/images/logos/nike-logo.png'
import Logitech from '../../../assets/images/logos/logitech-logo.png'
import Dior from '../../../assets/images/logos/dior-logo.png'
import LouisVuitton from '../../../assets/images/logos/louis-vuitton-logo.png'
import { useEffect } from 'react';
import i18n from '../../../i18n/i18n';
import { useTranslation } from 'react-i18next';

export const ProductsScroll = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(navigator.changeLanguage);
    }, [i18n])

    return (
        <div className="products-scroll mt-24">
            <div className="products-scroll flex justify-between my-24 items-end px-12 md:px-20 lg:px-24">
                <a className='opacity-80 text-black dark:text-blue-100' href="#">{t("seeMore")}</a>
                <h2 className='text-3xl text-green-800 dark:text-blue-900 text-center'>{t("products")}</h2>
            </div>
            <div className="wrapper wrapper-reverse relative mt-20 overflow-hidden cursor-pointer">
                <div className="item item1" style={{background: `url(${Nike})`, backgroundSize: 'cover'}}></div>
                <div className="item item2" style={{background: `url(${Dior})`, backgroundSize: 'cover'}}></div>
                <div className="item item3" style={{background: `url(${LaCoste})`, backgroundSize: 'cover'}}></div>
                <div className="item item4" style={{background: `url(${LouisVuitton})`, backgroundSize: 'cover'}}></div>
                <div className="item item5" style={{background: `url(${Rolex})`, backgroundSize: 'cover'}}></div>
                <div className="item item6" style={{background: `url(${Logitech})`, backgroundSize: 'cover'}}></div>
                <div className="item item7" style={{background: `url(${Porsche})`, backgroundSize: 'cover'}}></div>
                <div className="item item8" style={{background: `url(${Apple})`, backgroundSize: 'cover'}}></div>
            </div>
        </div>
    )
}