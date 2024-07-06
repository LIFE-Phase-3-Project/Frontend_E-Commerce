import { BrowserRouter as Router, Routes } from "react-router-dom"
import { DefaultRoutes } from "./default-routes/default-routes"
import NavBar from "../layouts/NavBar/NavBar"
import Footer from "../layouts/Footer/Footer"

export const AppRoutes = () => {
    return (
        <Router>
            <NavBar/>
            <Routes>
                {DefaultRoutes}
            </Routes>
            <Footer />
        </Router>
    )
}