import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string().email('Invalid email address').required('Email is required'),
    password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required')
})

export const registerSchema = yup.object().shape({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    email: yup.string().email('Invalid email address').required('Email is required'),
    password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    confirmPassword: yup .string() .oneOf([yup.ref("password"), null], "Passwords Don't Match").required("Confirm Password is required"),
    phoneNumber: yup.string().required('Phone Number is required'),
    address: yup.string().required('Address is required'),
})