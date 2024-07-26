import { productsApi } from '../api/productsApi';
import { categoriesApi } from '../api/categoriesApi';
import { brandsApi } from '../api/brandsApi';
import { subCategoriesApi } from '../api/subCategoriesApi ';
import { authApi } from '../api/authApi';
import { wishlistApi } from '../api/wishListApi';

export const middleware = [
    productsApi.middleware,
    categoriesApi.middleware,
    brandsApi.middleware,
    subCategoriesApi.middleware,
    authApi.middleware,
    wishlistApi.middleware,
]