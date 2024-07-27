import { ErrorMessage, Field } from "formik";

export const NumberInputFields = ({fieldsForInput, handleChange, formData}) => {
    return (
        <div className="grid grid-cols-2 gap-4 mt-4">
            {fieldsForInput
                .filter(({ type }) => type === "number")
                .map(({ field, type }) => (
                    <div key={field} className="mb-4">
                        <label className="text-green-extra-dark dark:text-dashboard-extra-light block capitalize text-sm font-medium text-gray-700" htmlFor={field}>
                            {field}
                        </label>
                        <Field
                            className="mt-1 capitalize block w-full p-2 border border-green-dark dark:border-gray-300 text-green-dark dark:text-dashboard-extra-light bg-transparent rounded-md"
                            type={type}
                            placeholder={`${field.charAt(0).toUpperCase() + field.slice(1)}...`}
                            id={field}
                            name={field}
                            value={formData[field] || ''}
                            onChange={handleChange}
                        />
                    </div>
                ))}
        </div>
    )
}