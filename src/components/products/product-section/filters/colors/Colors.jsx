import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setFilters } from "../../../../../redux/slices/filtersSlice";
import { changeActivePage } from "../../../../../redux/slices/paginationSlice";

export const Colors = ({ color }) => {
    const dispatch = useDispatch();

    const handleClick = (colorTitle) => {
        dispatch(setFilters({Color: colorTitle.toLowerCase()}))
        dispatch(changeActivePage(1))
    }
    return (
        <Link onClick={() => handleClick(color?.title)}>
            <li
                key={color._id}
                className={`border-b-[1px] border-b-[#F0F0F0] dark:border-b-gray-600 py-2 flex items-center gap-2 hover:bg-${color?.title.toLowerCase()}-200 hover:text-${color?.title.toLowerCase()}-900`}
            >
                <span
                    style={{ background: color.base }}
                    className="w-3 h-3 bg-gray-500 rounded-full"
                ></span>
                    {color.title}
            </li>
        </Link>
    );
};
