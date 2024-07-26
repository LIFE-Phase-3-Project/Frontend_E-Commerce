import { createSlice } from "@reduxjs/toolkit";

const initialState = { filters: {} }

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
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

export const { setFilters, clearFilters } = filtersSlice.actions

export default filtersSlice.reducer