import { v4 as uuidv4 } from 'uuid';
import { Route } from "react-router-dom"
import { AdminDashboard } from '../../pages/admin/AdminDashboard'
import { AdminDashboardProducts } from '../../pages/admin/AdminDashboardProducts';
import { AdminDashboardBrands } from '../../pages/admin/AdminDashboardBrands';
import { AdminDashboardCategories } from '../../pages/admin/AdminDashboardCategories';
import { AdminDashboardUsers } from '../../pages/admin/AdminDashboardUsers';
import { AdminEditProduct } from '../../pages/admin/edit/AdminEditProduct';
import { AdminCreateProduct } from '../../pages/admin/create/AdminCreateProduct';
import { AdminEditCategory } from '../../pages/admin/edit/AdminEditCategory';
import { AdminCreateCategory } from '../../pages/admin/create/AdminCreateCategory';
import { AdminDashboardReviews } from '../../pages/admin/AdminDashboardReviews';
import { AdminDashboardInventory } from '../../pages/admin/inventory/AdminDashboardInventory';
import { AdminEditUser } from '../../pages/admin/edit/AdminEditUser';

export const AdminRoutes = [
    <Route key={uuidv4()} path="/dashboard" element={<AdminDashboard />}/>,
    <Route key={uuidv4()} path="dashboard/inventory" element={<AdminDashboardInventory />}/>,
    <Route key={uuidv4()} path="/dashboard/products" element={<AdminDashboardProducts />}/>,
    <Route key={uuidv4()} path="/dashboard/products/:id" element={<AdminEditProduct />}/>,
    <Route key={uuidv4()} path="/dashboard/products/create" element={<AdminCreateProduct />}/>,
    <Route key={uuidv4()} path="/dashboard/categories" element={<AdminDashboardCategories />}/>,
    <Route key={uuidv4()} path="/dashboard/categories/:id" element={<AdminEditCategory />}/>,
    <Route key={uuidv4()} path="/dashboard/categories/create" element={<AdminCreateCategory />}/>,
    <Route key={uuidv4()} path="/dashboard/reviews" element={<AdminDashboardReviews />}/>,
    <Route key={uuidv4()} path="/dashboard/brands" element={<AdminDashboardBrands />}/>,
    <Route key={uuidv4()} path="/dashboard/users" element={<AdminDashboardUsers />}/>,
    <Route key={uuidv4()} path="/dashboard/users/:id" element={<AdminEditUser />}/>,
]