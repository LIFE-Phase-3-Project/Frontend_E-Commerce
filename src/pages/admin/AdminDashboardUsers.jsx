import { useDeleteProductMutation, } from "../../redux/api/productsApi";
import React, { useState } from "react";
import { Loader } from '../../helpers/Loader'
import { DesktopTable } from "../../components/admin/tables/DesktopTable";
import { MobileTable } from "../../components/admin/tables/MobileTable";
import { useGetAllUsersQuery } from "../../redux/api/authApi";

export const AdminDashboardUsers = () => {
    const { data, isLoading, isError, refetch } = useGetAllUsersQuery();
    const [deleteProduct] = useDeleteProductMutation();
    const [deletingId, setDeletingId] = useState(null);

    const theadTh = ["Id", "Title", "Price", "Stock", "Ratings", "Edit", "Delete"];

    const handleDelete = async (id) => {
        setDeletingId(id);
        try {
            await deleteProduct(id).unwrap();
            refetch();
        } catch (error) {
            console.error('Error deleting product:', error);
            setDeletingId(null); 
        }
    };

    if (isLoading) return <Loader />;
    if (isError) return <div className="text-black dark:text-white">Error loading users</div>;

    return (
        <div className="lg:flex lg:flex-col lg:items-center relative">
            <table className="w-9/12 my-10 lg:mt-0 lg:w-12/12 ml-12 lg:ml-0 lg:absolute top-16 left-1/2 lg:transform lg:-translate-x-1/2 border border-green-800 dark:border-admin-sidebar-color">

                <DesktopTable data={data?.items} theadTh={theadTh} deletingId={deletingId} handleDelete={handleDelete}/>
                <MobileTable data={data?.items} theadTh={theadTh} deletingId={deletingId} handleDelete={handleDelete}/>

            </table>
        </div>
    );
};
