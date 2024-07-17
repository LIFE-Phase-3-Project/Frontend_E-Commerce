import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    products: [],
    filters: {} 
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },

        setFilters: (state, action) => {
            state.filters = { ...state.filters, ...action.payload };
        },

        clearFilters: (state) => {
            state.filters = {}
        }
    }
})

export const { setProducts, setFilters, clearFilters } = productsSlice.actions

export default productsSlice.reducer
