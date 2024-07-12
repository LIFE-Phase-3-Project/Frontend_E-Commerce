import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import darkModeSlice from './slices/darkModeSlice';
import { productsApi } from './api/productsApi';
import { categoriesApi } from './api/categoriesApi';

export const store = configureStore({
    reducer: {
        darkTheme: darkModeSlice,

        [productsApi.reducerPath]: productsApi.reducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,  
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            productsApi.middleware,
            categoriesApi.middleware
        ),
})

setupListeners(store.dispatch);