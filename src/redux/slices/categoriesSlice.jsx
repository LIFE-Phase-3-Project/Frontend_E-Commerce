import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    categories: [],
    filters: {} 
}

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        },

        setFilters: (state, action) => {
            state.filters = { ...state.filters, ...action.payload };
        },

        clearFilters: (state) => {
            state.filters = {}
        }
    }
})

export const { setCategories, setFilters, clearFilters } = categoriesSlice.actions

export default categoriesSlice.reducer
