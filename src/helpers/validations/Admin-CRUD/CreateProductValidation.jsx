import * as yup from 'yup';


export const createProductSchema = yup.object().shape({
    title: yup.string().required('Title is required'),
    description: yup.string().required('Description is required'),
    color: yup.string().required('Color is required'),
    image: yup.string().required('This field must have at least 1 image'),
    subCategoryId: yup.number().required('SubCategoryId is required'),
    price: yup.number().required('Price is required'),
    ratings: yup.number().required('Ratings is required'),
    stoc: yup.number().required('Stock is required'),
})