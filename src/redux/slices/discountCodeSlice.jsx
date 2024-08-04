import { createSlice } from "@reduxjs/toolkit";

const initialState = { discountCode: localStorage.getItem('discount-code') || '' };

const discountCodeSlice = createSlice({
    name: "discountCodeSlice",
    initialState,
    reducers: {
        setDiscountCode: (state, action) => {
            state.discountCode = action.payload;
            localStorage.setItem('discount-code', action.payload);
        },
        
        removeDiscountCode: (state) => {
            state.discountCode = '';
            console.log("Delete")
            localStorage.removeItem('discount-code');
        }
    }
});

export const { setDiscountCode, removeDiscountCode } = discountCodeSlice.actions;

export default discountCodeSlice.reducer;
