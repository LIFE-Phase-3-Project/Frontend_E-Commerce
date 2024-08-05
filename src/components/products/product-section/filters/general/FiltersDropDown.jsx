import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export const FiltersDropdown = ({ title, isActive, toggleDropdown, children }) => {
    return (
        <div className="dropdown">
            <h3 onClick={toggleDropdown}
                className={`capitalize text-md rounded p-3 cursor-pointer 
                            flex items-center justify-between
                            hover:text-green-dark 
                            dark:hover:text-white
                            ${isActive && 'bg-green-dark dark:bg-pink-dark text-white'}
                        `}>
                {title}
                {isActive ? <FaArrowUp /> : <FaArrowDown />}
            </h3>

            {isActive && (
                <div className="dropdown-content max-h-52 overflow-y-auto">
                    {children}
                </div>
            )}
        </div>
    )
}
