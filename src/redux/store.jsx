import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import darkModeSlice from './slices/darkModeSlice';
import { productsApi } from './api/productsApi';

export const store = configureStore({
    reducer: {
        darkTheme: darkModeSlice,

        [productsApi.reducerPath]: productsApi.reducer,  
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            productsApi.middleware
        ),
})

setupListeners(store.dispatch);