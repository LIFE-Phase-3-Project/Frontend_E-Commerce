import React, { useEffect, useState } from "react";
import { MultiRangeSlider } from "./multi-range-slider/MultiRangeSlider";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../../../../redux/slices/productsSlice";
import { useDebounce } from "../../../../../helpers/hooks/useDebounce";

export const Price = () => {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(1000);
    const debouncedMin = useDebounce(min, 500);
    const debouncedMax = useDebounce(max, 500);
    const filters = useSelector((state) => state.products.filters);

    const dispatch = useDispatch();

    const handleMinChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value >= 0 && value <= max) {
            setMin(value);
        }
    };

    const handleMaxChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value >= min && value <= 1000) {
            setMax(value);
        }
    };

    useEffect(() => {
        dispatch(setFilters({ price_gte: debouncedMin }));
    }, [debouncedMin, dispatch]);

    useEffect(() => {
        dispatch(setFilters({ price_lte: debouncedMax }));
    }, [debouncedMax, dispatch]);

    useEffect(() => {
        if (!filters.price_gte && !filters.price_lte) {
            setMin(0);
            setMax(1000);
        }
    }, [filters]);

    return (
        <div className="price text-md p-3">
            <div className="price-container flex justify-start items-center flex-wrap">
                <h3 className="min-w-16">Price: </h3>
                <div className="inputs w-12/12 lg:w-8/12 min-w-16 flex mt-2">
                    <input
                        type="text"
                        className="border border-green-light dark:border-pink-light w-full bg-transparent text-center"
                        onChange={handleMinChange}
                        value={min}
                    />
                    <span className="mx-1">-</span>
                    <input
                        type="text"
                        className="border border-green-light dark:border-pink-light w-full bg-transparent text-center"
                        onChange={handleMaxChange}
                        value={max}
                    />
                </div>
            </div>
            <MultiRangeSlider
                min={0}
                max={1000}
                minVal={min}
                setMinVal={setMin}
                maxVal={max}
                setMaxVal={setMax}
                onChange={({ min, max }) => {
                    setMin(min);
                    setMax(max);
                }}
            />
        </div>
    );
};
