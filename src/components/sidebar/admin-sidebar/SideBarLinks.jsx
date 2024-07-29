import { MdOutlineHome } from "react-icons/md"
import { DataLinks } from "./DataLinks"
import { FAQLinks } from "./FaqLink"
import { Link } from "react-router-dom"
import { MdOutlineInventory } from "react-icons/md";
import DarkTheme from '../../theme/DarkModeToggle'

export const SideBarLinks = () => {
    return (
        <div className="sidebar-links py-6 px-4">
            <div className="sidebar-home flex">
                <div className="flex flex-col">
                    <div className="flex items-center">
                        <MdOutlineHome size={22}/>
                        <Link to="/dashboard" className="text-lg ml-2">Home</Link>
                    </div>

                    <div className="flex mt-1 items-center">
                        <MdOutlineInventory size={22}/>
                        <Link to="/dashboard/inventory" className="text-lg ml-2">Inventory</Link>
                    </div>
                </div>
            </div>

            <DataLinks />
            <FAQLinks />

            <div className="dashboard-theme-change mt-6">
                <DarkTheme fontSize="25px" marginLeft="5px"/>
            </div>
    </div>
    )
}