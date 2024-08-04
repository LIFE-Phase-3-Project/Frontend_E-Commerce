import { useState, useEffect } from "react";
import { Modal } from "../../../helpers/Modal";
import { AppError } from "../../../helpers/AppError";
import { useParams, useNavigate } from "react-router-dom";
import { useGetProductByIdQuery, useUpdateProductMutation } from "../../../redux/api/productsApi";
import { EditForm } from "../../../components/admin/edit/EditForm";
import { IoArrowBackSharp } from "react-icons/io5";

export const AdminEditProduct = () => {
    const navigate = useNavigate();
    const params = useParams();
    const { data, isLoading, error } = useGetProductByIdQuery(params?.id);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        subCategoryId: 0,
        color: "",
        image: [],
        price: 0,
        ratings: 0,
        stock: 0
    });
    const [updateProduct, { isLoading: isUpdating, isError, isSuccess }] = useUpdateProductMutation();
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const fieldsForInput = [
        { field: "title", type: "text" },
        { field: "description", type: "text" },
        { field: "subCategoryId", type: "number" },
        { field: "color", type: "text" },
        { field: "price", type: "number" },
        { field: "ratings", type: "number" },
        { field: "stock", type: "number" }
    ];

    useEffect(() => {
        if (data) {
            setFormData({
                ...data,
                image: data.image ? data.image.map(url => ({ name: url })) : [],
                stock: data.stock || 0
            });
        }
    }, [data]);

    useEffect(() => {
        if (isSuccess) {
            setShowModal(true);
            setModalMessage("Product updated successfully!");
            navigate('/dashboard/products');
        } else if (isError) {
            setShowModal(true);
            setModalMessage("Failed to update the product");
        }
    }, [isSuccess, isError, navigate]);

    const handleUpdate = async () => {
        const form = new FormData();
        
        Object.keys(formData).forEach(key => {
            if (key === "image" && Array.isArray(formData[key])) {
                formData[key].forEach((file) => {
                    form.append('image', file); 
                });
            } else if (formData[key] !== null && formData[key] !== undefined) {
                form.append(key, formData[key]);
            }
        });
    
        try {
            await updateProduct({ id: params.id, updatedProduct: form }).unwrap();
        } catch (error) {
            console.error('Failed to update the product:', error);
        }
    };

    const handleBackClick = () => {
        const basePath = window.location.pathname.split('/').slice(0, -1).join('/');
        navigate(basePath);
    };

    if (isLoading) return <p>Loading...</p>;
    if (error) return <AppError msg={error?.data?.title || "Something went wrong"} />;

    return (
        <div className="flex flex-col items-center py-5 relative">
            <div className="return-back absolute top-4 left-5 cursor-pointer" onClick={handleBackClick}>
                <IoArrowBackSharp size={30} color="white"/>
            </div>
            <h2 className="text-white">Edit product with id: {params?.id}</h2>
            <EditForm
                data={data}
                fieldsForInput={fieldsForInput}
                formData={formData}
                setFormData={setFormData}
                onSubmit={handleUpdate}
                isUpdating={isUpdating}
                itemName={"product"}
            />
            {showModal && <Modal msg={modalMessage} />}
        </div>
    );
};
