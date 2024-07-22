import { createSlice } from "@reduxjs/toolkit";

const initialState = { activePage: null, postsPerPage: null, totalCount: null }

const paginationSlice = createSlice({
    name: "paginationSlice",
    initialState,
    reducers: { 
        changeActivePage: (state, action) => {
            state.activePage = action.payload;
        },

        setTotalCount: (state,action) => {
            state.totalCount = action.payload
        },

        setPaginationValues: (state,action) => {
            state.activePage = action.payload?.activePage;
            state.postsPerPage = action.payload?.postsPerPage;
        }
    }
})

export const { changeActivePage, setTotalCount, setPaginationValues } = paginationSlice.actions

export default paginationSlice.reducer
