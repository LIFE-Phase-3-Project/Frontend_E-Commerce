import { Route, Routes, useLocation } from "react-router-dom";
import { DefaultRoutes } from "./default-routes/default-routes";
import { AdminRoutes } from "./admin-routes/admin-routes";
import NavBar from '../layouts/NavBar/NavBar';
import Footer from '../layouts/Footer/Footer';
import ScrollToTop from "./ScrollToTop";
import { useSelector } from "react-redux";
import { AdminDashboardSideBar } from "../layouts/sidebar/admin/AdminDashboardSideBar";
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Login } from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";
import { AnimatePresence } from "framer-motion";


export const AppRoutes = () => {
    const routesWithoutNavbar = ["/login", "/register"];
    const isDarkMode = useSelector(state => state.darkTheme.darkMode);
    const location = useLocation();
    const user = useSelector(state => state.user);
    const isDashboard = location.pathname.startsWith("/dashboard");

    const GetNavBar = () => {
        return routesWithoutNavbar.includes(location.pathname) || isDashboard ? null : <NavBar />;
    };

    const GetFooter = () => {
        return routesWithoutNavbar.includes(location.pathname) || isDashboard ? null : <Footer />;
    };

    const shouldShowSidebar = () => {
        if (!isDashboard) return false;

        const productDetailPattern = [/^\/dashboard\/products\/\d+$/,/^\/dashboard\/categories\/\d+$/,/^\/dashboard\/categories\/\d+$/];
        if (location.pathname.includes("create") || productDetailPattern.some(p =>p.test(location.pathname))) {
            return false;
        }

        return true;
    };

    useEffect(() => {
        const createPattern = /\/create/;
        const productDetailPattern = /^\/dashboard\/products\/\d+$/;
        const categoryDetailPattern = /^\/dashboard\/categories\/\d+$/;

        if ((user?.role.toLowerCase() === "admin" || user?.role.toLowerCase() === "superadmin") && isDarkMode && isDashboard) {
            document.body.style.backgroundColor = "#141b2d";
        } else if (
            createPattern.test(location.pathname) ||
            productDetailPattern.test(location.pathname) ||
            categoryDetailPattern.test(location.pathname)
        ) {
            document.body.style.backgroundColor = "#12452d";
        } else {
            document.body.style.backgroundColor = "";
        }
    }, [isDarkMode, location.pathname, user?.role]);

    return (
        <>
            <ScrollToTop />
            <GetNavBar />
            <div className={isDashboard ? "flex" : ""}>
                {(shouldShowSidebar() && (user?.role.toLowerCase() === "admin" || user?.role.toLowerCase() === "superadmin")) && <AdminDashboardSideBar />}
                <div className={(shouldShowSidebar() && user?.role === "admin") ? "w-11/12 md:w-9/12 lg:w-10/12" : "w-full"}>
                    <AnimatePresence>
                        <Routes location={location} key={location.pathname}>
                            {DefaultRoutes}
                            {(user?.role.toLowerCase() === "admin" || user?.role.toLowerCase() === "superadmin") && AdminRoutes}

                            {
                                !user.isLoggedIn &&
                                <>
                                    <Route key={uuidv4()} path="/login" element={<Login />}/>
                                    <Route key={uuidv4()} path="/register" element={<Register />}/>                      
                                </>
                            }
                            <Route path="*" element={<div className="h-screen flex items-center justify-center"><h1 className="text-3xl">Page not found</h1></div>} />
                        </Routes>
                    </AnimatePresence>
                </div>
            </div>
            <GetFooter />
        </>
    );
};
