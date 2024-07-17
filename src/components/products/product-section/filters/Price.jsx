import React, { useEffect, useState } from "react";
import { MultiRangeSlider } from "./multi-range-slider/MultiRangeSlider";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../../../redux/slices/productsSlice";

export const Price = () => {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(1000);
    const filters = useSelector((state) => state.products.filters);


    const dispatch = useDispatch()

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
        dispatch(setFilters({ price_gte: min}))
    }, [min])

    useEffect(() => {
        dispatch(setFilters({ price_lte: max }))
    }, [max])

    useEffect(() => {
        if (!filters.price_gte && !filters.price_lte) {
            setMin(0);
            setMax(1000);
        }
    }, [filters]);

    return (
        <div className="price text-md p-3">
            <div className="price-container flex">
                <h3 className="w-20">Price: </h3>

                <div className="inputs w-6/12 flex">
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
