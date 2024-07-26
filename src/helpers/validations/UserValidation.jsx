import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(8).max(50).required("Password is required")
})