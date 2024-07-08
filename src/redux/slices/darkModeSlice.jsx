import { createSlice } from "@reduxjs/toolkit";

const initialState = { darkMode: false }

const darkModeSlice = createSlice({
    name: "darkTheme",
    initialState,
    reducers: {
        lightMode: (state) => {
            state.darkMode = false;
            localStorage.setItem('darkMode', false)
        },
        
        darkMode: (state) => {
            state.darkMode = true;
            localStorage.setItem('darkMode', true)
        }
    }
})

export const { lightMode, darkMode } = darkModeSlice.actions

export default darkModeSlice.reducer