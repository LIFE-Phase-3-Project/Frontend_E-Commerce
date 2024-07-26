import { BiCategory } from "react-icons/bi"
import { BsBuildings } from "react-icons/bs"
import { FaUsers } from "react-icons/fa"
import { MdLocalMall } from "react-icons/md"
import { Link } from "react-router-dom"

export const DataLinks = () => {
    const links = [
        { Icon: MdLocalMall, path: '/dashboard/products', text: 'Products' },
        { Icon: BiCategory, path: '/dashboard/categories', text: 'Categories' },
        { Icon: BsBuildings, path: '/dashboard/brands', text: 'Brands' },
        { Icon: FaUsers, path: '/dashboard/users', text: 'Users' },
    ];

    return (
        <div className="data mt-4">
            <h2 className="text-md opacity-80">Data</h2>

            <div className="data-links ml-2">
                {links.map((link, index) => (
                    <div key={index} className="flex items-center">
                        <link.Icon size={19}/>
                        <Link to={link.path} className="text-lg mt-2 ml-2">{link.text}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};