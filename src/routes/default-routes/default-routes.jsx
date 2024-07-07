import { Route } from "react-router-dom";
import { Home } from "../../pages/Home";
import  ProductDetail  from "../../pages/ProductDetail";
import { v4 as uuidv4 } from 'uuid';

export const DefaultRoutes = [
    <Route key={uuidv4()} path="/" element={<Home />}/>,
    <Route key={uuidv4()} path="/products/:id" element={<ProductDetail />}/>,
    <Route key={uuidv4()} path="/menu" element={<h1>Menu</h1>}/>
]