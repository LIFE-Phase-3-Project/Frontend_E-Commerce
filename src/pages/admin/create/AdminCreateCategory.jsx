
import { useEffect, useState } from "react";
import { Modal } from "../../../helpers/Modal";
import { CreateForm } from "../../../components/admin/create/CreateForm";
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { usePostCategorieMutation } from "../../../redux/api/categoriesApi";

const AdminCreateCategory = () => {
    const [formData, setFormData] = useState({
        categoryName: "",
    });
    const [addCategory, { isLoading: isAdding,  isSuccess, error }] = usePostCategorieMutation();
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const navigate = useNavigate();

    const handleBackClick = () => {
        const basePath = window.location.pathname.split('/').slice(0, -1).join('/');
        navigate(basePath);
    };

    const fieldsForInput = [
        { field: "categoryName", type: "text" },
    ];

    useEffect(() => {
        if (isSuccess) {
            setShowModal(true);
            setModalMessage("Category created successfully!");
            setFormData({
                categoryName: "",
            });
            navigate('/dashboard/categories')
        } else if (error) {
            setShowModal(true);
            setModalMessage(error?.data);
            navigate('/dashboard/categories')
        }
    }, [isSuccess, error]);

    const handleCreate = async () => {
        if (formData) {
            const formattedData = {
                ...formData
            };
    
            try {
                const response = await addCategory(formattedData).unwrap();
    
                const message = typeof response === 'string' ? response : "Category created successfully!";
                setShowModal(true);
                setModalMessage(message);
                
                setFormData({ categoryName: "" });
            } catch (error) {
                console.error('Failed to create the category:', error);
                setShowModal(true);
                setModalMessage("Failed to create the category");
            }
        }
    };
    

    return (
        <div className="flex flex-col items-center py-12 relative">
            <div className="return-back absolute top-4 left-5 cursor-pointer" onClick={handleBackClick}>
                <IoArrowBackSharp size={30} color="white"/>
            </div>
            <h2 className="text-white">Create a new category</h2>
            <CreateForm
                itemName="category"
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

export default AdminCreateCategory