import darkModeSlice from '../slices/darkModeSlice';
import paginationSlice from '../slices/paginationSlice';
import productsSlice from '../slices/productsSlice';
import categoriesSlice from '../slices/categoriesSlice';
import brandsSlice from '../slices/brandsSlice';
import { productsApi } from '../api/productsApi';
import { categoriesApi } from '../api/categoriesApi';
import { brandsApi } from '../api/brandsApi';
import { subCategoriesApi } from '../api/subCategoriesApi '

export const reducers = {
    darkTheme: darkModeSlice,
    pagination: paginationSlice,
    products: productsSlice,
    categories: categoriesSlice,
    brands: brandsSlice,

    [productsApi.reducerPath]: productsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [brandsApi.reducerPath]: brandsApi.reducer,
    [subCategoriesApi.reducerPath]: subCategoriesApi.reducer,
}