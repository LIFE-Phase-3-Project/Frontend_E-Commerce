import { useEffect, useState } from "react";
import { Modal } from "../../../helpers/Modal";
import { CreateForm } from "../../../components/admin/create/CreateForm";
import { IoArrowBackSharp } from "react-icons/io5";
import { usePostProductMutation } from "../../../redux/api/productsApi";
import { useNavigate } from "react-router-dom";

export const AdminCreateProduct = () => {
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
    const [addProduct, { isLoading: isAdding, isSuccess, error }] = usePostProductMutation();
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const navigate = useNavigate();

    const handleBackClick = () => {
        const basePath = window.location.pathname.split('/').slice(0, -1).join('/');
        navigate(basePath);
    };

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
        if (isSuccess) {
            setShowModal(true);
            setModalMessage("Product created successfully!");
            setFormData({
                title: "",
                description: "",
                subCategoryId: 0,
                color: "",
                image: [],
                price: 0,
                ratings: 0,
                stock: 0
            });
            navigate('/dashboard/products');
        } else if (error) {
            setShowModal(true);
            setModalMessage(error?.data);
        }
    }, [isSuccess, error]);

    const handleCreate = async () => {
        if (formData) {
            const formDataObject = new FormData();
            formDataObject.append('title', formData.title);
            formDataObject.append('description', formData.description);
            formDataObject.append('subCategoryId', formData.subCategoryId);
            formDataObject.append('color', formData.color);
            formDataObject.append('price', formData.price);
            formDataObject.append('ratings', formData.ratings);
            formDataObject.append('stock', formData.stock);

            formData.image.forEach((file) => {
                formDataObject.append('image', file);
            });

            try {
                const response = await addProduct(formDataObject).unwrap();
                const message = typeof response === 'string' ? response : "Product created successfully!";
                setShowModal(true);
                setModalMessage(message);
                
                setFormData({
                    title: "",
                    description: "",
                    subCategoryId: 0,
                    color: "",
                    image: [],
                    price: 0,
                    ratings: 0,
                    stock: 0
                });
            } catch (error) {
                console.error('Failed to create the product:', error);
                setShowModal(true);
                setModalMessage("Failed to create the product");
            }
        }
    };

    return (
        <div className="flex flex-col items-center py-5 relative">
            <div className="return-back absolute top-4 left-5 cursor-pointer" onClick={handleBackClick}>
                <IoArrowBackSharp size={30} color="white"/>
            </div>
            <h2 className="text-white">Create a new product</h2>
            <CreateForm
                itemName="product"
                fieldsForInput={fieldsForInput}
                formData={formData}
                setFormData={setFormData}
                onSubmit={handleCreate}
                isAdding={isAdding}
            />
            {showModal && <Modal msg={modalMessage} />}
        </div>
    );
};
