import darkModeSlice from '../slices/darkModeSlice';
import paginationSlice from '../slices/paginationSlice';
import productsSlice from '../slices/productsSlice';
import categoriesSlice from '../slices/categoriesSlice';
import brandsSlice from '../slices/brandsSlice';
import filtersSlice from '../slices/filtersSlice';
import userSlice from '../slices/userSlice';
import { productsApi } from '../api/productsApi';
import { categoriesApi } from '../api/categoriesApi';
import { brandsApi } from '../api/brandsApi';
import { subCategoriesApi } from '../api/subCategoriesApi '
import { authApi } from '../api/authApi';
import { wishlistApi } from '../api/wishListApi';
import { reviewsApi } from '../api/reviewsApi';
import { ordersApi } from '../api/ordersApi';
import { paymentsApi } from '../api/paymentsApi';
import { shoppingCartApi } from '../api/shoppingCartApi';

export const reducers = {
    darkTheme: darkModeSlice,
    pagination: paginationSlice,
    products: productsSlice,
    categories: categoriesSlice,
    brands: brandsSlice,
    filters: filtersSlice,
    user: userSlice,

    [productsApi.reducerPath]: productsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [brandsApi.reducerPath]: brandsApi.reducer,
    [subCategoriesApi.reducerPath]: subCategoriesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [wishlistApi.reducerPath]: wishlistApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    [paymentsApi.reducerPath]: paymentsApi.reducer,
    [shoppingCartApi.reducerPath]: shoppingCartApi.reducer,
}