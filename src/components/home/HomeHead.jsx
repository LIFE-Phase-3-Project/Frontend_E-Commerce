import '../../style/home.css';

export const HomeHead = () => {
    return (
        <div className="home-head h-dvh ">
            <div className="home-head-image h-dvh w-full relative"></div>
            <div className="home-head-content w-10/12 absolute text-white inset-1/2 -translate-x-1/2 -translate-y-1/2
                                md:w-7/12 
                                lg:w-5/12">
                <h2>E-commerce</h2>
                <p className='opacity-75'>
                    Shop the Latest Trends and Timeless Classics: From cutting-edge fashion to enduring household staples, find everything you need in one place
                </p>
            </div>
        </div>
    )
}