import { useSelector } from "react-redux"
import { useGetAllProductsQuery } from '../../redux/api/productsApi'

export const AdminDashboard = () => {
    const { data } = useGetAllProductsQuery()
    console.log("data prod")
    console.log(data?.items)
    const user = useSelector(state => state.user)
    return (
        <div>
            <h2>Admin: {user.firstName}</h2>
        </div>
    )
}