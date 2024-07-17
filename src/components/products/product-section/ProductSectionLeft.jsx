import { useEffect, useState } from "react";
import { Filters } from "./filters/Filters";

export const ProductSectionLeft = ({ category = "" }) => {
    const [isHamburgerActive, setIsHamburgerActive] = useState(false);

    useEffect(() => {
        const handleResize = () => window.innerWidth > 768 
                ? setIsHamburgerActive(true)
                : setIsHamburgerActive(false);

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleClick = () => {
        setIsHamburgerActive(!isHamburgerActive);
    };

    return (
        <div className={`product-section-left ${isHamburgerActive ? "active" : ""} relative`}>
            <div className={`overlay ${isHamburgerActive ? "block" : "hidden"}`} onClick={handleClick}></div>

            <Filters category={category} isHamburgerActive={isHamburgerActive} />

            <div onClick={handleClick} className={`product-section-hamburger absolute ${isHamburgerActive ? "active right-0 top-0" : ""} flex flex-col mt-3 md:hidden`}>
                <span className="bg-custom-green dark:bg-blue-medium"></span>
                <span className="bg-custom-green dark:bg-blue-medium"></span>
                <span className="bg-custom-green dark:bg-blue-medium"></span>
            </div>
        </div>
    );
};
