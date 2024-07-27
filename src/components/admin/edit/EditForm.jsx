import { useEffect } from "react";
import { Field, Formik } from "formik";
import { ArrayInputFields } from "../create/ArrayInputFields";  // Import the ArrayInputFields component

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
            setFormData(data);
        }
    }, [data]);

    return (
        <Formik>
        <form onSubmit={handleSubmit} className="bg-white dark:bg-admin-sidebar-color px-10 border-2 border-green-medium shadow-md shadow-green-light-low-opacity dark:border-dashboard-light-color rounded-lg w-5/12 p-4">
            <div className="grid grid-cols-1 gap-4">
                {fieldsForInput
                    .filter(({ type }) => type === "text")
                    .map(({ field, type }) => (
                        <div key={field} className="mb-4 w-full flex flex-col justify-center m-auto">
                            <label className="text-green-extra-dark dark:text-dashboard-extra-light block capitalize text-sm font-medium text-gray-700" htmlFor={field}>
                                {field}
                            </label>
                            <input
                                className="mt-1 block w-full p-2 border border-green-dark dark:border-gray-300 text-green-dark dark:text-dashboard-extra-light bg-transparent rounded-md"
                                type={type}
                                id={field}
                                name={field}
                                value={formData[field] || ''}
                                onChange={handleChange}
                            />
                        </div>
                    ))}
            </div>
            <ArrayInputFields
                fieldsForInput={fieldsForInput}
                handleArrayChange={handleArrayChange}
                formData={formData}
            />
            <div className="grid grid-cols-2 gap-4 mt-4">
                {fieldsForInput
                    .filter(({ type }) => type === "number")
                    .map(({ field, type }) => (
                        <div key={field} className="mb-4">
                            <label className="text-green-extra-dark dark:text-dashboard-extra-light block capitalize text-sm font-medium text-gray-700" htmlFor={field}>
                                {field}
                            </label>
                            <input
                                className="mt-1 block w-full p-2 border border-green-dark dark:border-gray-300 text-green-dark dark:text-dashboard-extra-light bg-transparent rounded-md"
                                type={type}
                                id={field}
                                name={field}
                                value={formData[field] || ''}
                                onChange={handleChange}
                            />
                        </div>
                    ))}
            </div>
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
