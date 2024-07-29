import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Loader } from '../../helpers/Loader';
import { DesktopTable } from "../../components/admin/tables/DesktopTable";
import { MobileTable } from "../../components/admin/tables/MobileTable";
import { useDeleteCategoryMutation, useGetAllCategoriesQuery } from "../../redux/api/categoriesApi";

export const AdminDashboardCategories = () => {
    const [page, setPage] = useState(1);
    const location = useLocation();
    
    const { data, isLoading, isError, refetch } = useGetAllCategoriesQuery();
    const [deleteCategory] = useDeleteCategoryMutation();
    const [deletingId, setDeletingId] = useState(null);

    const theadTh = ["categoryId", "categoryName", "Edit", "Delete"];
    const nrOfPages = Math.ceil(data?.length / 10);

    useEffect(() => {
        refetch();
    }, [location]);

    const handleDelete = async (id) => {
        console.log("id")
        console.log(id)
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
        <div className="admin-dashboard-categories lg:flex lg:flex-col lg:items-center relative">
            <table className="w-9/12 my-10 lg:mt-0 lg:w-12/12 ml-12 lg:ml-0 lg:absolute top-16 left-1/2 lg:transform lg:-translate-x-1/2 border border-green-800 dark:border-admin-sidebar-color">
                <DesktopTable 
                    name="category" 
                    data={data} 
                    theadTh={theadTh} 
                    deletingId={deletingId} 
                    handleDelete={handleDelete} 
                    page={page} 
                    setPage={setPage} 
                    nrOfPages={nrOfPages} 
                />
                <MobileTable 
                    name="category" 
                    data={data} 
                    theadTh={theadTh} 
                    deletingId={deletingId} 
                    handleDelete={handleDelete} 
                    page={page} 
                    setPage={setPage} 
                    nrOfPages={nrOfPages} 
                />
            </table>
        </div>
    );
};
