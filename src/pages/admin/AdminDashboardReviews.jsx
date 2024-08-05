import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Loader } from '../../helpers/Loader';
import { DesktopTable } from "../../components/admin/tables/DesktopTable";
import { MobileTable } from "../../components/admin/tables/MobileTable";
import { useGetAllReviewsQuery, useDeleteReviewMutation } from "../../redux/api/reviewsApi";

const AdminDashboardReviews = () => {
    const [page, setPage] = useState(1);
    const location = useLocation();
    
    const { data, isLoading, isError, refetch } = useGetAllReviewsQuery();
    console.log("reviews-data")
    console.log(data)
    const [deleteReview] = useDeleteReviewMutation();
    const [deletingId, setDeletingId] = useState(null);

    const theadTh = ["Review ID", "Product Name", "Rating", "Comment", "Edit", "Delete"];
    const dataFields = ["reviewId", "productName", "rating", "comment", "edit", "delete"];
    const nrOfPages = Math.ceil(data?.length / 10);

    useEffect(() => {
        refetch();
    }, [location]);

    const handleDelete = async (id) => {
        console.log("id")
        console.log(id)
        setDeletingId(id);
        try {
            await deleteReview(id).unwrap();
            refetch();
        } catch (error) {
            console.error('Error deleting review:', error);
            setDeletingId(null);
        }
    };

    if (isLoading) return <Loader />;
    if (isError) return <div>Error loading reviews</div>;

    return (
        <div className="admin-dashboard-reviews lg:flex lg:flex-col lg:items-center relative">
            <table className="w-9/12 my-10 lg:mt-0 lg:w-12/12 ml-12 lg:ml-0 lg:absolute top-16 left-1/2 lg:transform lg:-translate-x-1/2 border border-green-800 dark:border-admin-sidebar-color">
                <DesktopTable 
                    name="review" 
                    data={data} 
                    theadTh={theadTh} 
                    dataFields={dataFields} 
                    deletingId={deletingId} 
                    handleDelete={handleDelete} 
                    page={page} 
                    setPage={setPage} 
                    nrOfPages={nrOfPages} 
                />
                <MobileTable 
                    name="review" 
                    data={data} 
                    theadTh={theadTh} 
                    dataFields={dataFields} 
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

export default AdminDashboardReviews