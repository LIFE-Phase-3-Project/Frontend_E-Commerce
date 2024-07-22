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

        clearFilters: (state, action) => {
            const { activePage, postsPerPage } = action.payload;
            if(activePage || postsPerPage) {
                state.filters = { _page: activePage, _per_page: postsPerPage}
            } else {
                state.filters = {}
            }
        }
    }
})

export const { setProducts, setFilters, clearFilters } = productsSlice.actions

export default productsSlice.reducer
