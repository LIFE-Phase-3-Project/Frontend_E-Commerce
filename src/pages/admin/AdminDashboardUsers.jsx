import { Loader } from '../../helpers/Loader';
import { DesktopTable } from "../../components/admin/tables/DesktopTable";
import { MobileTable } from "../../components/admin/tables/MobileTable";
import { useGetAllUsersQuery,useDeleteUserMutation } from "../../redux/api/authApi";
import { useSelector } from 'react-redux';
import { IoIosLock } from 'react-icons/io';
import { useState } from 'react';
import { Modal } from '../../helpers/Modal';

export const AdminDashboardUsers = () => {
    const user = useSelector(state => state.user.role)
    const [deletingId, setDeletingId] = useState(null);

    const { data, isLoading, isError,refetch } = useGetAllUsersQuery();
    const [deleteUser] = useDeleteUserMutation();


    if(user?.toLowerCase() !== "superadmin") {
        return (
            <div className='h-screen text-black dark:text-white flex flex-col justify-center items-center'>
                <IoIosLock size={60} />
                <h2 className='mt-2 text-2xl'>You are not authorized</h2>
            </div>
        )
    }
    
    
    const theadTh = ["Id", "First Name", "Last Name", "Email", "Role Id", "Edit", "Delete"];
    const dataFields = ["id", "firstName", "lastName", "email", "roleId", "edit", "delete"];

    const handleDelete = async (id) => {
        try {
            await deleteUser(id).unwrap();
            refetch();
        } catch (error) {
            console.error('Error deleting user:', error);
            setDeletingId(null);
        }
    };

    if (isLoading) return <Loader />;
    if (isError) return <div className="text-black dark:text-white">Error loading users</div>;

    return (
        <div className="lg:flex lg:flex-col lg:items-center relative">
            <table className="w-9/12 my-10 lg:mt-0 lg:w-12/12 ml-12 lg:ml-0 lg:absolute top-16 left-1/2 lg:transform lg:-translate-x-1/2 border border-green-800 dark:border-admin-sidebar-color">
                <DesktopTable data={data} theadTh={theadTh} dataFields={dataFields} handleDelete={handleDelete}/>
                <MobileTable data={data} theadTh={theadTh} dataFields={dataFields} handleDelete={handleDelete}/>
            </table>
        </div>
    );
};
