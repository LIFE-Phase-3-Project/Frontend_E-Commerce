import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Cookies from 'js-cookie';
import VueJwtDecode from 'vue-jwt-decode';
import FallThyk from '../../assets/images/svg/fall_thyk.svg';
import DarkFallThyk from '../../assets/images/svg/dark-fall_thyk.svg';
import { useGetUserByIDQuery, useLoginUserMutation } from '../../redux/api/authApi';
import { setLogInUser } from '../../redux/slices/userSlice';
import * as yup from 'yup';

const loginSchema = yup.object().shape({
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().min(8).max(50).required("Password is required")
});

export const LoginForm = () => {
    const [userId, setUserId] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const isDarkTheme = useSelector(state => state.darkTheme.darkMode);
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch(); 

    const { data: userData, isLoading: isLoadingUser } = useGetUserByIDQuery(userId, {
        skip: !userId,
    });

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(loginSchema)
    });

    const [loginUser] = useLoginUserMutation();

    const loginForm = async (data) => {
        setErrorMessage(''); 
        try {
            const response = await loginUser(data).unwrap();
            if (response.token) {
                Cookies.set('token', response.token);
                const decodedToken = VueJwtDecode.decode(response.token);

                localStorage.setItem('userId', decodedToken.nameid);
                setUserId(decodedToken.nameid);
                localStorage.setItem('token', response.token);
            }
        } catch (error) {
            setErrorMessage(error?.data || "An error occurred");
            reset();
        }
    };

    useEffect(() => {
        if (userData && !isLoadingUser) {
            const role = userData.roleName;
            dispatch(setLogInUser({
                id: userData.id,
                role: role,
                email: userData.email,
                firstName: userData.firstName,
                lastname: userData.lastname,
                address: userData.address,
                phoneNumber: userData.phoneNumber,
                password: userData.password
            }));
            if (role.toLowerCase() === "admin") {
                navigate('/dashboard');
            } else if (role.toLowerCase() === "customer") {
                navigate('/products');
            }
        }
    }, [userData, isLoadingUser, dispatch, navigate]);

    useEffect(() => {
        i18n.changeLanguage(navigator.language);
    }, [i18n]);

    return (
        <div className={`log-in-form border shadow-lg rounded-md py-5 px-7 h-auto
                         ${isDarkTheme ? 'bg-dark border-pink-medium shadow-purple-dark' : 'bg-white border-green-medium shadow-green-light'}`}>
            <div className="log-in-form-head flex justify-center items-center mb-5">
                <img src={isDarkTheme ? DarkFallThyk : FallThyk} alt="icon" width={140} />
            </div>

            <div className="log-in-form-body">
                <h2 className="text-center text-3xl my-3 text-green-800 dark:text-purple-light ">{t("loginTitle")}</h2>
                <form className="flex flex-col" onSubmit={handleSubmit(loginForm)}>
                    <input 
                        type="text"
                        {...register("email")}
                        onChange={() => setErrorMessage("")}
                        placeholder={t("username")}
                        className="w-64 h-8 border-2 pl-2 mb-3 bg-transparent
                                border-green-light outline-green-medium text-green-dark
                                dark:border-purple-light dark:outline-purple-dark dark:text-purple-extra-light
                                 "
                    />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                    <input 
                        type="password"
                        {...register("password")}
                        onChange={() => setErrorMessage("")}
                        placeholder={t("password")}
                        className="w-64 h-8 border-2 pl-2 mb-3 bg-transparent
                            border-green-light outline-green-medium text-green-dark
                            dark:border-purple-light dark:outline-purple-dark dark:text-purple-extra-light"
                    />
                    {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                    {errorMessage && <p className='text-center text-red-600'>{errorMessage}</p>}

                    <div className="log-in-form-footer flex items-center justify-center my-3">
                        <button type='submit'
                                className="w-6/12 py-1 font-medium 
                                    bg-custom-green text-white hover:bg-green-extra-dark
                                    dark:bg-purple-medium dark:hover:bg-purple-dark"
                                    >
                            {t("loginTitle")}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
