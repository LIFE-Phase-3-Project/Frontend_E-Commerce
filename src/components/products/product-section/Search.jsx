import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export const Search = () => {
    const [focusInput, setFocusInput] = useState(false);

    const handleFocus = () => setFocusInput(true);
    const handleBlur = () => setFocusInput(false);

    return (
        <div className={`search flex items-center rounded w-9/12 sm:w-6/12 h-full border-2 ${focusInput ? "border-green-dark" : "border-green-light-low-opacity"} text-green-dark
                            md:w-6/12
                            lg:w-5/12 lg:max-w-md`
                        }>
            <input
                type="text"
                placeholder="Search product..."
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="w-11/12 h-full pl-3 rounded-s bg-transparent outline-none"
            />
            <CiSearch className="w-1/12" size={"80%"} />
        </div>
    );
};
