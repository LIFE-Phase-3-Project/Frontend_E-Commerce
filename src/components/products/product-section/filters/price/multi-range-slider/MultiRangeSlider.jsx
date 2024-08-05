import React, { useCallback, useEffect, useRef } from "react";
import "./mrs.css";
import { useSelector } from "react-redux";

export const MultiRangeSlider = ({ min, max, minVal, setMinVal, maxVal, setMaxVal, onChange }) => {
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);
  const filters = useSelector(state => state.filters.filters)
  

  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  const handleMinChange = (event) => {
    let value = Math.min(Number(event.target.value), maxVal - 1);
    value = Math.max(value, min); 
    setMinVal(value);
    minValRef.current = value;
    if (value >= maxVal) {
      setMaxVal(value + 1);
      maxValRef.current = value + 1;
    }
  };

  const handleMaxChange = (event) => {
    let value = Math.max(Number(event.target.value), minVal + 1);
    value = Math.min(value, max);
    setMaxVal(value);
    maxValRef.current = value;
    if (value <= minVal) {
      setMinVal(value - 1); 
      minValRef.current = value - 1;
    }
  };

  useEffect(() => {
    // if(!filters.price_gte || !filters.price_lte) {
    //   setMinVal(0)
    //   setMaxVal(1000)

    // }
  }, [filters])

  return (
    <div className="container h-16 flex items-center justify-center">
      <input
          type="range"
          min={min}
          max={max}
          defaultValue={minVal}
          onChange={handleMinChange}
          className="thumb thumb-left absolute w-10/12 outline-none h-0 pointer-events-none z-30"
          style={{ zIndex: minVal > max - 100 && "5" }}
      />
      <input
          type="range"
          min={min}
          max={max}
          defaultValue={maxVal}
          onChange={handleMaxChange}
          className="thumb thumb-right absolute w-10/12 outline-none h-0 z-40 pointer-events-none"
      />

      <div className="slider relative w-11/12">
        <div className="slider__track absolute bg-gray-200 rounded w-full z-10" />
        <div ref={range} className="slider__range absolute bg-green-medium dark:bg-pink-medium rounded z-20" />
        <div className="slider__left-value absolute text-green-dark dark:text-white text-sm mt-5 left-1.5">{minVal}</div>
        <div className="slider__right-value absolute text-green-dark dark:text-white mt-5 -right-1">{maxVal}</div>
      </div>
    </div>
  );
};
