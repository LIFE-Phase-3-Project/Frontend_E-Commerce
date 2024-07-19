import { Route } from "react-router-dom";
import { Home } from "../../pages/Home";
import  ProductDetail  from "../../pages/ProductDetail";
import { Products } from '../../pages/Products';
import { ProductsCategory } from '../../pages/ProductsCategory';
import { WishList } from '../../pages/WishList';
import { UserProfile } from '../../pages/Profile';
import { v4 as uuidv4 } from 'uuid';

export const DefaultRoutes = [
    <Route key={uuidv4()} path="/" element={<Home />}/>,
    <Route key={uuidv4()} path="/products" element={<Products />}/>,
    <Route key={uuidv4()} path="/products/:category" element={<ProductsCategory />}/>,
    <Route key={uuidv4()} path="/products/:category/:id" element={<ProductDetail />}/>,
    <Route key={uuidv4()} path="/wishlist" element={<WishList />}/>,
    <Route key={uuidv4()} path="/:id/profile" element={<UserProfile />}/>,
]