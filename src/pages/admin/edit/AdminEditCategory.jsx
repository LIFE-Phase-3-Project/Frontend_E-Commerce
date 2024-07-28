import { useState, useEffect } from "react";
import { Modal } from "../../../helpers/Modal";
import { AppError } from "../../../helpers/AppError";
import { useParams, useNavigate } from "react-router-dom";
import { EditForm } from "../../../components/admin/edit/EditForm";
import { IoArrowBackSharp } from "react-icons/io5";
import { useGetCategoryByIdQuery, useUpdateCategoryMutation } from "../../../redux/api/categoriesApi";

export const AdminEditCategory = () => {
    const navigate = useNavigate();
    const params = useParams();
    const { data, isLoading, error } = useGetCategoryByIdQuery(params?.id);
    const [formData, setFormData] = useState({});
    const [updateCategory, { isLoading: isUpdating, isError, isSuccess }] = useUpdateCategoryMutation();
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const fieldsForInput = [
        { field: "categoryName", type: "text" },
    ];

    useEffect(() => {
        if (data) {
            setFormData({
                ...data,
            });
        }
    }, [data]);

    useEffect(() => {
        if (isSuccess) {
            setShowModal(true);
            setModalMessage("Category updated successfully!");
            navigate('/dashboard/categories');
        } else if (isError) {
            setShowModal(true);
            setModalMessage("Failed to update the category");
        }
    }, [isSuccess, isError]);

    const handleUpdate = async () => {
        if (formData) {
            const updatedData = {
                ...formData,
            };
            try {
                await updateCategory({ id: params.id, updatedCategory: updatedData }).unwrap();
            } catch (error) {
                console.error('Failed to update the category:', error);
            }
        }
    };

    const handleBackClick = () => {
        const basePath = window.location.pathname.split('/').slice(0, -1).join('/');
        navigate(basePath);
    };

    if (isLoading) return <p>Loading...</p>;
    if (error) return <AppError msg={error?.data?.title || "Something went wrong"} />;

    return (
        <div className="flex flex-col items-center py-5 py-12 relative">
            <div className="return-back absolute top-4 left-5 cursor-pointer" onClick={handleBackClick}>
                <IoArrowBackSharp size={30} color="white"/>
            </div>
            <h2 className="text-white">Edit category with id: {params?.id}</h2>
            <EditForm
                data={data}
                fieldsForInput={fieldsForInput}
                formData={formData}
                setFormData={setFormData}
                onSubmit={handleUpdate}
                isUpdating={isUpdating}
                itemName={"category"}
            />
            {showModal && <Modal msg={modalMessage} />}
        </div>
    );
};
