import { useGetAllReviewsQuery, useDeleteReviewMutation } from "../../redux/api/reviewsApi";
import React, { useEffect, useState } from "react";
import { Loader } from '../../helpers/Loader'
import { DesktopTable } from "../../components/admin/tables/DesktopTable";
import { MobileTable } from "../../components/admin/tables/MobileTable";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from '../../redux/slices/filtersSlice'
import { useLocation } from "react-router-dom";

export const AdminDashboardReviews = () => {
    const [page, setPage] = useState(1)
    const [sortField, setSortField] = useState(null);
    const [sortDirection, setSortDirection] = useState("a-z");

    const filters = useSelector(state => state.filters.filters)
    const dispatch = useDispatch()
    const location = useLocation();

    const { data, isLoading, isError, refetch } = useGetAllReviewsQuery(filters);
    const [deleteReview] = useDeleteReviewMutation();
    const [deletingId, setDeletingId] = useState(null);

    const theadTh = [
        { name: "Id", filterable: false },
        { name: "Comment", filterable: false },
        { name: "Rating", filterable: false },
        { name: "Product Id", filterable: false },
        { name: "Edit", filterable: false },
        { name: "Delete", filterable: false }
    ];

    const dataFields = ["id", "comment", "rating", "productId", "edit", "delete"];
    const nrOfPages = Math.ceil(data?.totalCount / data?.pageSize)

    const handleDelete = async (id) => {
        setDeletingId(id);
        try {
            await deleteReview(id).unwrap();
            refetch();
        } catch (error) {
            console.error('Error deleting review:', error);
            setDeletingId(null); 
        }
    };

    const handleSort = (field) => {
        const direction = sortField === field && sortDirection === "a-z" ? "z-a" : "a-z";
        setSortField(field);
        setSortDirection(direction);
        dispatch(setFilters({ ...filters, sortField: field, SortOrder: direction }));
    };

    useEffect(() => {
        refetch();
    }, [location, filters]);

    useEffect(() => {
        dispatch(setFilters({ page: page, pageSize: 10 }));
    }, [page]);

    if (isLoading) return <Loader />;
    if (isError) return <div>Error loading reviews</div>;

    return (
        <div className="admin-dashboard-reviews lg:flex lg:flex-col lg:items-center relative">
            <table className="w-9/12 my-10 lg:mt-0 lg:w-12/12 ml-12 lg:ml-0 lg:absolute top-16 left-1/2 lg:transform lg:-translate-x-1/2 border border-green-800 dark:border-admin-sidebar-color">
                <DesktopTable 
                    name={"reviews"} 
                    data={data?.items} 
                    theadTh={theadTh}
                    dataFields={dataFields}
                    deletingId={deletingId} 
                    handleDelete={handleDelete} 
                    page={page} 
                    setPage={setPage} 
                    nrOfPages={nrOfPages}
                    sortField={sortField}
                    sortDirection={sortDirection}
                    handleSort={handleSort} />

                <MobileTable 
                    name="reviews" 
                    data={data?.items}
                    theadTh={theadTh}
                    dataFields={dataFields}
                    deletingId={deletingId}
                    handleDelete={handleDelete}
                    page={page}
                    setPage={setPage}
                    nrOfPages={nrOfPages}
                    sortField={sortField}
                    sortDirection={sortDirection}
                    handleSort={handleSort} />
            </table>
        </div>
    );
};
