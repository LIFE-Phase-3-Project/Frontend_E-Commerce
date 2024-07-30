import { createSlice } from "@reduxjs/toolkit";

const initialState = { page: null, pageSize: null, totalCount: null }

const paginationSlice = createSlice({
    name: "paginationSlice",
    initialState,
    reducers: { 
        changePage: (state, action) => {
            state.page = action.payload;
        },

        setTotalCount: (state,action) => {
            state.totalCount = action.payload
        },

        setPaginationValues: (state,action) => {
            state.page = action.payload?.page;
            state.pageSize = action.payload?.pageSize;
        }
    }
})

export const { changePage, setTotalCount, setPaginationValues } = paginationSlice.actions

export default paginationSlice.reducer
