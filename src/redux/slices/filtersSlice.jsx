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
            const { postsPerPage } = action.payload;
            if( postsPerPage ) {
                state.filters = { page: 1, pageSize: postsPerPage}
            } else {
                state.filters = {}
            }
        }
    }
})

export const { setFilters, clearFilters } = filtersSlice.actions

export default filtersSlice.reducer