import { Link } from "react-router-dom"

export const ProductsByCategories = ({category}) => {
    return (
        <li key={category?.id} className="py-2 px-3">
            <Link to={`${category?.id}`}>
                {category?.title}
            </Link>
        </li>
    )
}