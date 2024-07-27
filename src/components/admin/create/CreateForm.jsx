import { ArrayInputFields } from "./ArrayInputFields";
import { TextInputFields } from "./TextInputFields";
import { NumberInputFields } from "./NumberInputFields";
import { Formik } from "formik";

export const CreateForm = ({ fieldsForInput, formData, setFormData, onSubmit, isAdding }) => {

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit();
        }
    };

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
                {isAdding ? 'Creating...' : 'Create Product'}
            </button>
        </form>
        </Formik>
    );
};
