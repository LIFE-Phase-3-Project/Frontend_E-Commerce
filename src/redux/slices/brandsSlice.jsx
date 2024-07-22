import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    brands: [],
    filters: {} 
}

const brandsSlice = createSlice({
    name: "brands",
    initialState,
    reducers: {
        setBrands: (state, action) => {
            state.brands = action.payload;
        },

        setFilters: (state, action) => {
            state.filters = { ...state.filters, ...action.payload };
        },

        clearFilters: (state) => {
            state.filters = {}
        }
    }
})

export const { setBrands, setFilters, clearFilters } = brandsSlice.actions

export default brandsSlice.reducer
