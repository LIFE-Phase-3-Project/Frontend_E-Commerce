import React, { useState } from "react";
import { Loader } from '../../helpers/Loader'
import { DesktopTable } from "../../components/admin/DesktopTable";
import { MobileTable } from "../../components/admin/MobileTable";
import { useDeleteCategoryMutation, useGetAllCategoriesQuery } from "../../redux/api/categoriesApi";

export const AdminDashboardCategories = () => {
    const { data, isLoading, isError, refetch } = useGetAllCategoriesQuery();
    const [deleteCategory] = useDeleteCategoryMutation();
    const [deletingId, setDeletingId] = useState(null);

    const theadTh = ["categoryId", "CategoryName"];

    const handleDelete = async (id) => {
        setDeletingId(id);
        try {
            await deleteCategory(id).unwrap();
            refetch();
        } catch (error) {
            console.error('Error deleting category:', error);
            setDeletingId(null); 
        }
    };

    if (isLoading) return <Loader />;
    if (isError) return <div>Error loading categories</div>;

    return (
        <div className="lg:flex lg:flex-col lg:items-center relative">
            <table className="w-9/12 my-10 lg:mt-0 lg:w-12/12 ml-12 lg:ml-0 lg:absolute top-16 left-1/2 lg:transform lg:-translate-x-1/2 border border-green-800 dark:border-admin-sidebar-color">

                <DesktopTable data={data?.items} theadTh={theadTh} deletingId={deletingId} handleDelete={handleDelete}/>
                <MobileTable name={"category"} data={data?.items} theadTh={theadTh} deletingId={deletingId} handleDelete={handleDelete}/>

            </table>
        </div>
    );
};
