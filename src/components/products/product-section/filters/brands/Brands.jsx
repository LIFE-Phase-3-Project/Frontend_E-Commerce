import { Link } from "react-router-dom"

export const Brands = ({brand}) => {
    return (
        <li key={brand?.id} className="py-2 px-3 hover:bg-red-200">
            <Link to={`${brand?.id}`}>
                {brand?.title}
            </Link>
        </li>
    )
}