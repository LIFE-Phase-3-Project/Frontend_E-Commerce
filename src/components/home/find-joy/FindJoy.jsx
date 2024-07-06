import { ExploreLeft } from './ExploreLeft';
import { ExploreRight } from './ExploreRight';

export const FindJoy = () => {
    return (
        <div className="find-joy mt-20 z-10">
            <h2 className="text-4xl my-2 text-center text-green-700">Find Joy in Every Purchase</h2>

            <div className="explore text-green-medium mt-10 flex flex-col justify-around px-8 pt-10
                                    sm:px-8 
                                    md:flex-row md:py-24 md:px-16 
                                    lg:p-24">

                <ExploreLeft />
                <ExploreRight />
               
            </div>
        </div>
    )
}