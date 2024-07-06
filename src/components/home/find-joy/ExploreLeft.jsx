import { useState } from "react";

export const ExploreLeft = () => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <div className="explore-left max-w-xlg px-2 order-2 
                            md:order-1 md:w-5/12">

            <h3 className="text-2xl 
                    md:mt-0 md:w-3/3
                    lg:w-10/12">
                Explore our carefully curated selection designed to bring delight and satisfaction with every item you buy.
            </h3>

            <div className={`explore-left-search h-8 box-border w-10/12 mt-7 flex items-center ${isFocused ? "border-2" : "border"} border-green-dark text-green-dark 
                                md:w-11/12`}>
                <input type="text"
                placeholder='Search for a product...'
                className="w-10/12 pl-2 outline-0" 
                onFocus={handleFocus}
                onBlur={handleBlur}
                />
                <button className='h-full px-2 w-3/12 text-white bg-green-700 hover:bg-green-800 
                                    lg:w-3/12'>
                    Search
                </button>
            </div>

        <p className='text-gray-700 opacity-60 mt-2'>Start your search for a product and find happiness.</p>
    </div>
    )
}