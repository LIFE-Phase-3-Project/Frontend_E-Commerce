import { MdOutlineHome } from "react-icons/md"
import { DataLinks } from "./DataLinks"

export const SideBarLinks = () => {
    return (
        <div className="sidebar-links py-6 px-4">
            <div className="sidebar-home flex">
                <MdOutlineHome size={22}/>
                <h2 className="text-lg ml-2">Home</h2>
            </div>

            <DataLinks />
    </div>
    )
}