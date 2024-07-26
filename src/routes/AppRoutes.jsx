import { Route, Routes, useLocation } from "react-router-dom";
import { DefaultRoutes } from "./default-routes/default-routes";
import { AdminRoutes } from "./admin-routes/admin-routes";
import NavBar from '../layouts/navbar/NavBar';
import Footer from '../layouts/footer/Footer';
import ScrollToTop from "./ScrollToTop";
import { useSelector } from "react-redux";
import { AdminDashboardSideBar } from "../layouts/sidebar/admin/AdminDashboardSideBar";
import { useEffect } from "react";

export const AppRoutes = () => {
    const routesWithoutNavbar = ["/login"];
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

        const productDetailPattern = /^\/dashboard\/products\/\d+$/;
        if (location.pathname.includes("create") || productDetailPattern.test(location.pathname)) {
            return false;
        }

        return true;
    };

    useEffect(() => {
        const createPattern = /\/create/;
        const productDetailPattern = /^\/dashboard\/products\/\d+$/;
        const categoryDetailPattern = /^\/dashboard\/category\/\d+$/;

        if (user?.role === "admin" && isDarkMode && isDashboard) {
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
                {(shouldShowSidebar() && user?.role === "admin") && <AdminDashboardSideBar />}
                <div className={(shouldShowSidebar() && user?.role === "admin") ? "w-10/12 md:w-9/12 lg:w-10/12" : "w-full"}>
                    <Routes>
                        {DefaultRoutes}
                        {user?.role === "admin" && AdminRoutes}
                        <Route path="*" element={<div className="h-screen flex items-center justify-center"><h1 className="text-3xl">Page not found</h1></div>} />
                    </Routes>
                </div>
            </div>
            <GetFooter />
        </>
    );
};
