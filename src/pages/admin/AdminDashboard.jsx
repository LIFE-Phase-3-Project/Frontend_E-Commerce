import { useSelector } from "react-redux"

export const AdminDashboard = () => {
    const user = useSelector(state => state.user)
    return (
        <div>
            <h2>Admin: {user.firstName}</h2>
        </div>
    )
}