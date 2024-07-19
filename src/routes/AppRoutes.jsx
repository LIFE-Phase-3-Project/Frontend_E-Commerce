import { BrowserRouter as Router, Routes } from "react-router-dom"
import { DefaultRoutes } from "./default-routes/default-routes"
import NavBar from '../layouts/NavBar/NavBar'
import Footer from '../layouts/Footer/Footer'
import ScrollToTop from "./ScrollToTop"

export const AppRoutes = () => {
    return (
        <Router>
            <ScrollToTop />
            <NavBar />
                <Routes>
                    {DefaultRoutes}
                </Routes>
            <Footer />
        </Router>
    )
}