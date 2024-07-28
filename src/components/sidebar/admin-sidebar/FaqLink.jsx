import { MdOutlineReviews } from "react-icons/md"
import { Link } from "react-router-dom"

export const FAQLinks = () => {
    const links = [
        { Icon: MdOutlineReviews, path: '/dashboard/reviews', text: 'Reviews' },
    ];

    return (
        <div className="data mt-4">
            <h2 className="text-md opacity-80">FAQ</h2>

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