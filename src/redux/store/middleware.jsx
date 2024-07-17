import { productsApi } from '../api/productsApi';
import { categoriesApi } from '../api/categoriesApi';

export const middleware = [
    productsApi.middleware,
    categoriesApi.middleware
]