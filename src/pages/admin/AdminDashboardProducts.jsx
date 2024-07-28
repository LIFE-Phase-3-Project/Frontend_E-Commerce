import { useDeleteProductMutation, useGetAllProductsQuery } from "../../redux/api/productsApi";
import React, { useEffect, useState } from "react";
import { Loader } from '../../helpers/Loader'
import { DesktopTable } from "../../components/admin/DesktopTable";
import { MobileTable } from "../../components/admin/MobileTable";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from '../../redux/slices/filtersSlice'
import { useLocation } from "react-router-dom";

export const AdminDashboardProducts = () => {
    const [page, setPage] = useState(1)

    const filters = useSelector(state => state.filters.filters)
    const dispatch = useDispatch()
    const location = useLocation();

    const { data, isLoading, isError, refetch } = useGetAllProductsQuery(filters);
    const [deleteProduct] = useDeleteProductMutation();
    const [deletingId, setDeletingId] = useState(null);


    const theadTh = ["Id", "Title", "Price", "Stock", "Ratings", "Edit", "Delete"];
    const nrOfPages = Math.ceil(data?.totalCount / data?.pageSize)

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

    useEffect(() => {
        refetch();
    }, [location]);

    useEffect(() => {
        dispatch(setFilters({page: page ,pageSize:10}))
    }, [data, page])

    if (isLoading) return <Loader />;
    if (isError) return <div>Error loading products</div>;

    return (
        <div className="admin-dashboard-products lg:flex lg:flex-col lg:items-center relative">
            <table className="w-9/12 my-10 lg:mt-0 lg:w-12/12 ml-12 lg:ml-0 lg:absolute top-16 left-1/2 lg:transform lg:-translate-x-1/2 border border-green-800 dark:border-admin-sidebar-color">

                <DesktopTable name={"product"} data={data?.items} theadTh={theadTh} deletingId={deletingId} handleDelete={handleDelete} page={page} setPage={setPage} nrOfPages={nrOfPages}/>
                <MobileTable name="product" data={data?.items} theadTh={theadTh} deletingId={deletingId} handleDelete={handleDelete} page={page} setPage={setPage} nrOfPages={nrOfPages}/>

            </table>
        </div>
    );
};
