import { useDropzone } from 'react-dropzone';
import { ArrayInputFields } from "./ArrayInputFields";
import { TextInputFields } from "./TextInputFields";
import { NumberInputFields } from "./NumberInputFields";
import { Formik } from "formik";

export const CreateForm = ({ itemName, fieldsForInput, formData, setFormData, onSubmit, isAdding }) => {

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
            [name]: value.split(",").map(v => v.trim()), 
        });
    };

    const handleFileDrop = (acceptedFiles) => {
        const fileNames = acceptedFiles.map(file => file.path); 
        setFormData({
            ...formData,
            image: [...formData.image, ...fileNames],
        });
    };

    const handleRemoveImage = (e, indexToRemove) => {
        e.stopPropagation();
        const updatedImages = formData.image.filter((_, index) => index !== indexToRemove);
        setFormData({
            ...formData,
            image: updatedImages,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit();
        }
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: handleFileDrop,
        accept: 'image/*',
    });

    return (
        <Formik>
            <form onSubmit={handleSubmit} 
                  className="create-form px-10 border-2 shadow-md rounded-lg p-4
                    w-10/12 sm:w-8/12 md:w-6/12 md:min-w-96 lg:w-5/12 lg:min-w-96
                    bg-white shadow-green-light-low-opacity border-green-medium
                    dark:bg-admin-sidebar-color dark:border-dashboard-light-color
                ">

                <TextInputFields fieldsForInput={fieldsForInput} handleChange={handleChange} formData={formData}/>
                <ArrayInputFields fieldsForInput={fieldsForInput} handleArrayChange={handleArrayChange} formData={formData}/>
                <NumberInputFields fieldsForInput={fieldsForInput} handleChange={handleChange} formData={formData}/>
                
                {itemName !== "category" && (
                    <div className="mb-4 w-full flex flex-col justify-center m-auto">
                        <label className="text-green-extra-dark dark:text-dashboard-extra-light block capitalize text-sm font-medium text-gray-700" htmlFor="image">
                            Image
                        </label>
                        <div {...getRootProps({ className: 'dropzone' })} className="mt-1 block w-full p-4 border border-green-dark dark:border-gray-300 text-green-dark dark:text-dashboard-extra-light bg-transparent rounded-md cursor-pointer">
                            <input {...getInputProps()} />
                            {formData.image && formData.image.length > 0 ? (
                                <ul>
                                    {formData.image.map((fileName, index) => (
                                        <li key={index} className="flex items-center justify-between">
                                            <span className="truncate w-4/5">{fileName}</span>
                                            <button
                                                type="button"
                                                className="ml-2 text-red-600"
                                                onClick={(e) => handleRemoveImage(e, index)}
                                            >
                                                Remove
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>Drag & drop some files here, or click to select files</p>
                            )}
                        </div>
                    </div>
                )}
               
                <button
                    type="submit"
                    disabled={isAdding}
                    className="bg-green-dark 
                                hover:bg-green-extra-dark 
                                dark:bg-blue-700 
                                dark:hover:bg-blue-medium 
                                text-white 
                                px-4 py-2 rounded-md flex m-auto mt-4"
                >
                    {isAdding ? 'Creating...' : `Create ${itemName}`}
                </button>
            </form>
        </Formik>
    );
};
