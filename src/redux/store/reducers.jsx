import darkModeSlice from '../slices/darkModeSlice';
import productsSlice from '../slices/productsSlice';
import { productsApi } from '../api/productsApi';
import { categoriesApi } from '../api/categoriesApi';

export const reducers = {
    darkTheme: darkModeSlice,
    products: productsSlice,

    [productsApi.reducerPath]: productsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,  
}