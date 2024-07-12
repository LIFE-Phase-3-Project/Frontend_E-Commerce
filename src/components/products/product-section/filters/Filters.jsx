import { Link } from "react-router-dom";

export const Filters = ({ category = "", isHamburgerActive }) => {
    return (
        <div className={`filters ${isHamburgerActive ? "fixed inset-0 overflow-y-auto" : "hidden"} md:top-20 bg-white text-green-dark rounded md:sticky`}>
            <div className="max-w-md mx-auto p-3">
                <h3 className="text-xl border-b-2 mb-5 p-3">Filter By</h3>
                <h3 className="capitalize text-md bg-green-dark rounded text-white p-3">{category ? category : "Categories"}</h3>
                <ul className="p-3">
                    <li className="py-2 pl-1"><Link to={category ? `?Nenkategori=${category}` : "clothes"}>{category ? `Nenkategori: ${category}` : "Clothes"}</Link></li>
                    <li className="py-2 pl-1"><Link to="technology">Technology</Link></li>
                </ul>
                <h3 className="text-md p-3 cursor-pointer">Brands</h3>
                <h3 className="text-md p-3">Price</h3>
                <h3 className="text-md p-3">Color</h3>
                <h3 className="text-md p-3">Discounted Products</h3>
                <h3 className="text-md text-center p-3">Clear filters</h3>
            </div>
        </div>
    );
};
