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
        }
    }
})

export const { setCategories } = categoriesSlice.actions

export default categoriesSlice.reducer
