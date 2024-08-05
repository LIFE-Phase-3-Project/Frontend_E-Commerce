import '../../../style/admin-dashboard.css';

export const SideBarHead = ({ isHamburgerActive, setIsHamburgerActive }) => {

    const handleClick = () => {
        setIsHamburgerActive(!isHamburgerActive);
    };

    return (
        <div className="sidebar-head py-2 relative flex items-center justify-between">
            <h2 className="pl-6 text-xl opacity-80">Admin</h2>

            <div onClick={handleClick} 
                 className={`dashboard-sidebar-hamburger mr-3 flex flex-col cursor-pointer md:hidden 
                          ${isHamburgerActive ? "active" : ""}`}>
                <span className="bg-white opacity-70"></span>
                <span className="bg-white opacity-70"></span>
                <span className="bg-white opacity-70"></span>
            </div>
        </div>
    );
};
