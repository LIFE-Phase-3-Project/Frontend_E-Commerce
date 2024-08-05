import { productsApi } from '../api/productsApi';
import { categoriesApi } from '../api/categoriesApi';
import { brandsApi } from '../api/brandsApi';
import { subCategoriesApi } from '../api/subCategoriesApi ';
import { authApi } from '../api/authApi';
import { wishlistApi } from '../api/wishListApi';
import { reviewsApi } from '../api/reviewsApi';
import { ordersApi } from '../api/ordersApi';
import { paymentsApi } from '../api/paymentsApi';
import { shoppingCartApi } from '../api/shoppingCartApi';

export const middleware = [
    productsApi.middleware,
    categoriesApi.middleware,
    brandsApi.middleware,
    subCategoriesApi.middleware,
    authApi.middleware,
    wishlistApi.middleware,
    reviewsApi.middleware,
    ordersApi.middleware,
    paymentsApi.middleware,
    shoppingCartApi.middleware,
]