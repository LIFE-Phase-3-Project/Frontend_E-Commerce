import { Route } from "react-router-dom";
import { lazy } from 'react';

const AdminDashboard = lazy(() => import('../../pages/admin/AdminDashboard'));
const AdminDashboardProducts = lazy(() => import('../../pages/admin/AdminDashboardProducts'));
const AdminDashboardBrands = lazy(() => import('../../pages/admin/AdminDashboardBrands'));
const AdminDashboardCategories = lazy(() => import('../../pages/admin/AdminDashboardCategories'));
const AdminDashboardUsers = lazy(() => import('../../pages/admin/AdminDashboardUsers'));
const AdminEditProduct = lazy(() => import('../../pages/admin/edit/AdminEditProduct'));
const AdminCreateProduct = lazy(() => import('../../pages/admin/create/AdminCreateProduct'));
const AdminEditCategory = lazy(() => import('../../pages/admin/edit/AdminEditCategory'));
const AdminCreateCategory = lazy(() => import('../../pages/admin/create/AdminCreateCategory'));
const AdminDashboardReviews = lazy(() => import('../../pages/admin/AdminDashboardReviews'));
const AdminDashboardInventory = lazy(() => import('../../pages/admin/inventory/AdminDashboardInventory'));
const AdminEditUser = lazy(() => import('../../pages/admin/edit/AdminEditUser'));
const AdminDashboardChat = lazy(() => import('../../pages/admin/AdminDashboardChat'));
const AdminDiscountCode = lazy(() => import('../../pages/admin/AdminDiscountCode'));

export const AdminRoutes = [
    <Route key="admin-dashboard" path="/dashboard" element={<AdminDashboard />}/>,
    <Route key="admin-inventory" path="/dashboard/inventory" element={<AdminDashboardInventory />}/>,
    <Route key="admin-products" path="/dashboard/products" element={<AdminDashboardProducts />}/>,
    <Route key="admin-product-edit" path="/dashboard/products/:id" element={<AdminEditProduct />}/>,
    <Route key="admin-product-create" path="/dashboard/products/create" element={<AdminCreateProduct />}/>,
    <Route key="admin-categories" path="/dashboard/categories" element={<AdminDashboardCategories />}/>,
    <Route key="admin-category-edit" path="/dashboard/categories/:id" element={<AdminEditCategory />}/>,
    <Route key="admin-category-create" path="/dashboard/categories/create" element={<AdminCreateCategory />}/>,
    <Route key="admin-reviews" path="/dashboard/reviews" element={<AdminDashboardReviews />}/>,
    <Route key="admin-chat" path="/dashboard/chat" element={<AdminDashboardChat />}/>,
    <Route key="admin-discount" path="/dashboard/discount" element={<AdminDiscountCode />}/>,
    <Route key="admin-brands" path="/dashboard/brands" element={<AdminDashboardBrands />}/>,
    <Route key="admin-users" path="/dashboard/users" element={<AdminDashboardUsers />}/>,
    <Route key="admin-user-edit" path="/dashboard/users/:id" element={<AdminEditUser />}/>,
];
