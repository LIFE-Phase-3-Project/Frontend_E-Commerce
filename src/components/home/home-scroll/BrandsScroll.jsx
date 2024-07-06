import Apple from '../../../assets/images/logos/apple-logo.png';
import Porsche from '../../../assets/images/logos/porsche-logo.png'
import Rolex from '../../../assets/images/logos/rolex-logo.png'
import LaCoste from '../../../assets/images/logos/la-coste-logo.png'
import Nike from '../../../assets/images/logos/nike-logo.png'
import Logitech from '../../../assets/images/logos/logitech-logo.png'
import Dior from '../../../assets/images/logos/dior-logo.png'
import LouisVuitton from '../../../assets/images/logos/louis-vuitton-logo.png'

export const BrandsScroll = () => {
    return (
        <div className="brands-scroll mt-24">
            <div className="brands-scroll-head flex justify-between my-24 items-end px-12 md:px-20 lg:px-24">
                <h2 className='text-3xl text-green-800 text-center'>Brands</h2>
                <a className='opacity-80' href="#">See more</a>
            </div>
            <div className="wrapper relative mt-20 overflow-hidden cursor-pointer">
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