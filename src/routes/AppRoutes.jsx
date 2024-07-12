import { BrowserRouter as Router, Routes } from "react-router-dom"
import { DefaultRoutes } from "./default-routes/default-routes"
import NavBar from '../layouts/navbar/NavBar'
import Footer from '../layouts/footer/Footer'

export const AppRoutes = () => {
    return (
        <Router>
            <NavBar />
                <Routes>
                    {DefaultRoutes}
                </Routes>
            <Footer />
        </Router>
    )
}