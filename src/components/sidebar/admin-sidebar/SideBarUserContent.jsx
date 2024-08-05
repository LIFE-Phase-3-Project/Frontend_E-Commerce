import { useSelector } from 'react-redux'
import AdminImg from '../../../assets/images/admin-img.png'

export const SideBarUserContent = () => {
    const user = useSelector(state => state.user)

    return (
        <div className="sidebar-user-content flex flex-col border-b border-green-light dark:border-dashboard-light-color py-4 items-center">
            <img className="bg-green-light rounded-full flex items-center margin-auto" src={AdminImg} width={80} alt="admin" />
            <h2 className="mt-2 text-xl capitalize">{ user?.firstName }</h2>
        </div>
    )
}