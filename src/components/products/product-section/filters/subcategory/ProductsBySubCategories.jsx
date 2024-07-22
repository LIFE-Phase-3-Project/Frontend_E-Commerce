import { Link } from "react-router-dom"

export const ProductsBySubCategories = ({subcategory, categoryId}) => {
    return (
        <li className="py-2 px-3">
            <Link to={categoryId ? `?Nenkategori=${categoryId}` : subcategory?.id}>
                {subcategory?.title}
            </Link>
        </li>
    )
}