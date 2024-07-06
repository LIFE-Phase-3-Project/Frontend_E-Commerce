import Tshirt from '../../../assets/images/products/tshirt.png'
import Watch from '../../../assets/images/products/watch.png'
import Pants from '../../../assets/images/products/pants.png'

export const ExploreRight = () => {
    return (
        <div className="explore-right mb-3 md:mb-0 order-1 md:order-2 relative w-1/2">
            <img className='absolute rotate-6 left-4 
                                md:-top-5 md:-left-4 md:-left-0
                                -lg:-left-4'
                    src={Tshirt}
                    alt="tshirt" />
            <img className='absolute top-20 left-44 lg:left-52' src={Pants} alt="pants" />
            <img className='absolute top-0 left-80 lg:left-96'  src={Watch} alt="Watch" />
        </div>
    )
}