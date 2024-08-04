import { Loader } from '../../helpers/Loader';
import { DesktopTable } from "../../components/admin/tables/DesktopTable";
import { MobileTable } from "../../components/admin/tables/MobileTable";
import { useGetAllUsersQuery } from "../../redux/api/authApi";
import { useSelector } from 'react-redux';
import { IoIosLock } from 'react-icons/io';

export const AdminDashboardUsers = () => {
    const user = useSelector(state => state.user.role)

    const { data, isLoading, isError } = useGetAllUsersQuery();


    if(user?.toLowerCase() !== "superadmin") {
        return (
            <div className='h-screen text-black dark:text-white flex flex-col justify-center items-center'>
                <IoIosLock size={60} />
                <h2 className='mt-2 text-2xl'>You are not authorized</h2>
            </div>
        )
    }
    
    
    const theadTh = [
        { name: "Id", filterable: false },
        { name: "First Name", filterable: false },
        { name: "Last Name", filterable: false },
        { name: "Email", filterable: false },
        { name: "Role Id", filterable: false },
    ];
    const dataFields = ["id", "firstName", "lastName", "email", "roleId"];

    if (isLoading) return <Loader />;
    if (isError) return <div className="text-black dark:text-white">Error loading users</div>;

    return (
        <div className="lg:flex lg:flex-col lg:items-center relative">
            <table className="w-9/12 my-5 ml-12 top-16 left-1/2 border 
                    border-green-800 dark:border-admin-sidebar-color
                    lg:mt-0 lg:w-12/12 lg:absolute lg:transform lg:-translate-x-1/2 lg:ml-0
                    ">
                <DesktopTable name={"user"} data={data?.items} theadTh={theadTh} dataFields={dataFields}/>
                <MobileTable name={"user"} data={data?.items} theadTh={theadTh} dataFields={dataFields}/>
            </table>
        </div>
    );
};
