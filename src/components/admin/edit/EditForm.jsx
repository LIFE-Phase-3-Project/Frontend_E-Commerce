import { useEffect } from "react";
import { Formik } from "formik";
import { ArrayInputFields } from "../create/ArrayInputFields"; 
import { TextInputFields } from "../create/TextInputFields"; 
import { NumberInputFields } from "../create/NumberInputFields"; 

export const EditForm = ({ data, fieldsForInput, formData, setFormData, onSubmit, isUpdating, itemName }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleArrayChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value.split(",").map(item => item.trim())
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit();
        }
    };

    useEffect(() => {
        if (data) {
            setFormData({
                ...data,
                image: data.image ? data.image.join(",") : ''
            });
        }
    }, [data]);

    return (
        <Formik>
            <form onSubmit={handleSubmit} 
                className="edit-form 
                    px-10 border-2 shadow-md rounded-lg p-4
                    w-10/12 sm:w-8/12 md:w-6/12 md:min-w-96 lg:w-5/12 lg:min-w-96
                    border-green-medium shadow-green-light-low-opacity bg-white
                    dark:border-dashboard-light-color dark:bg-admin-sidebar-color
                ">
               
                <TextInputFields 
                    fieldsForInput={fieldsForInput}
                    handleChange={ handleChange}
                    formData={formData}
                />
                <ArrayInputFields
                    fieldsForInput={fieldsForInput}
                    handleArrayChange={handleArrayChange}
                    formData={formData}
                />
                <NumberInputFields 
                    fieldsForInput={fieldsForInput}
                    handleChange={handleChange} 
                    formData={formData}
                />
                <button
                    type="submit"
                    className="bg-green-dark hover:bg-green-extra-dark dark:bg-blue-700 dark:hover:bg-blue-medium text-white px-4 py-2 capitalize rounded-md flex m-auto mt-4"
                    disabled={isUpdating}
                >
                    {isUpdating ? 'Updating...' : `Update ${itemName}`}
                </button>
            </form>
        </Formik>
    );
};
