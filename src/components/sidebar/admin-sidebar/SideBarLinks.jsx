import { MdOutlineHome } from "react-icons/md"
import { DataLinks } from "./DataLinks"
import { FAQLinks } from "./FaqLink"
import { Link } from "react-router-dom"

export const SideBarLinks = () => {
    return (
        <div className="sidebar-links py-6 px-4">
            <div className="sidebar-home flex">
                <MdOutlineHome size={22}/>
                <Link to="/dashboard" className="text-lg ml-2">Home</Link>
            </div>

            <DataLinks />
            <FAQLinks />
    </div>
    )
}