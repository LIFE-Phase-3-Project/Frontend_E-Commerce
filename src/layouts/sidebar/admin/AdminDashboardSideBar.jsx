import { SideBarHead } from '../../../components/sidebar/admin-sidebar/SideBarHead';
import { SideBarUserContent } from '../../../components/sidebar/admin-sidebar/SideBarUserContent';
import { SideBarLinks } from "../../../components/sidebar/admin-sidebar/SideBarLinks";
import { useState } from 'react';

export const AdminDashboardSideBar = () => {
    const [isHamburgerActive, setIsHamburgerActive] = useState(false);

    return (
        <div className={`${isHamburgerActive ? "fixed left-0 right-0 top-0 bottom-0 bg-overlay" : "w-1/12"} bg-custom-blue z-20 top-0 md:w-3/12 md:min-w-56 lg:w-60 xl:w-2/12 xl:min-w-60`}> 
        <div className={`fixed w-10/12 sm:w-5/12 bg-green-dark dark:bg-admin-sidebar-color py-2 h-screen text-white md:sticky md:w-full top-0 left-0 right-0 transition-transform duration-300
                        ${isHamburgerActive ? "transform-none" : "-translate-x-full"} md:translate-x-0`}>
            <SideBarHead isHamburgerActive={isHamburgerActive} setIsHamburgerActive={setIsHamburgerActive} />
            <SideBarUserContent />
            <SideBarLinks />
            <div className="flex items-center justify-center mt-2">
                <button
                    className='w-6/12 text-center py-1 border-2 border-green-light hover:border-green-medium hover:bg-green-medium hover:text-white dark:border-dashboard-light-color'>Log out</button>
            </div>
        </div>
        </div>
    );
};
