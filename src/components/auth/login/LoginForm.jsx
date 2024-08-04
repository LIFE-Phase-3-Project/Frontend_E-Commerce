import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Cookies from 'js-cookie';
import VueJwtDecode from 'vue-jwt-decode';
import FallThyk from '../../../assets/images/svg/fall_thyk.svg';
import DarkFallThyk from '../../../assets/images/svg/dark-fall_thyk.svg';
import { useGetUserByIDQuery, useLoginUserMutation } from '../../../redux/api/authApi';
import { setLogInUser } from '../../../redux/slices/userSlice';
import { loginSchema } from '../../../helpers/validations/UserValidation';


export const LoginForm = () => {
    const [userRole, setUserRole] = useState('');
    const [userId, setUserId] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const isDarkTheme = useSelector(state => state.darkTheme.darkMode);
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector(state => state.user)

    const { data: userData, isLoading: isLoadingUser } = useGetUserByIDQuery(userId, {
        skip: !userId,
    });

    const [loginUser] = useLoginUserMutation();

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(loginSchema)
    })

    const submitForm = async (data) => {
        setErrorMessage(''); 
        try {
            const response = await loginUser(data).unwrap();
            console.log("response")
            console.log(response)
            if (response.token) {
                Cookies.set('token', response.token);
                const decodedToken = VueJwtDecode.decode(response.token);
                setUserRole(response.role)

                localStorage.setItem('userId', decodedToken.nameid);
                setUserId(decodedToken.nameid);
                localStorage.setItem('token', response.token);
            }
        } catch (error) {
            setErrorMessage(error?.data || "An error occurred");
        }
    };

    useEffect(() => {
        if (userData && !isLoadingUser) {
            dispatch(setLogInUser({
                id: userData.id,
                role: userRole,
                email: userData.email,
                firstName: userData.firstName,
                lastname: userData.lastname,
                address: userData.address,
                phoneNumber: userData.phoneNumber,
                password: userData.password
            }));
            if (userRole?.toLowerCase() === "admin" || userRole?.toLowerCase() === "superadmin") {
                navigate('/dashboard');
            } else if (userRole?.toLowerCase() === "customer") {
                navigate('/products');
            }
        }
    }, [userData, isLoadingUser, dispatch, navigate]);

    useEffect(() => {
        i18n.changeLanguage(navigator.language);
    }, [i18n]);


    return (
        <div style={{ backgroundColor: isDarkTheme && "#1a1919" }} 
            className={`log-in-form border shadow-lg rounded-md py-5 px-7 h-auto
                        ${isDarkTheme ? 'border-pink-medium shadow-purple-dark' : 'bg-white border-green-medium shadow-green-light'}`}>
            <div className="log-in-form-head flex justify-center items-center mb-5">
                <img src={isDarkTheme ? DarkFallThyk : FallThyk} alt="icon" width={140} />
            </div>
            <div className="log-in-form-body">
                <h2 className="text-center text-3xl my-3 text-green-800 dark:text-purple-light ">{t("loginTitle")}</h2>
                    <form className="flex flex-col" onSubmit={handleSubmit(submitForm)}>
                        <div className='mb-2'>
                            <input placeholder='Email' {...register('email')}
                                className="w-64 h-8 border-2 pl-2 mb-1 bg-transparent
                                border-green-light outline-green-medium text-green-dark
                                dark:border-purple-light dark:outline-purple-dark dark:text-purple-extra-light
                                "
                                onKeyDown={() => setErrorMessage("")}
                            />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </div>

                    <div className='mb-2'>
                        <input type="password" 
                                placeholder='Password'
                                {...register('password')}
                                
                                className="w-64 h-8 border-2 pl-2 mb-1 bg-transparent
                                border-green-light outline-green-medium text-green-dark
                                dark:border-purple-light dark:outline-purple-dark dark:text-purple-extra-light"
                                onKeyDown={() => setErrorMessage("")}
                                />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>

                        {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
                        
                    <div className="log-in-form-footer flex items-center justify-center my-3">
                        <button type='submit'
                                className="w-6/12 py-1 font-medium 
                                    bg-custom-green text-white hover:bg-green-extra-dark
                                    dark:bg-purple-medium dark:hover:bg-purple-dark"
                                    >
                            {t("loginTitle")}
                        </button>
                    </div>
                    <span className='text-center text-green-dark dark:text-purple-300'>
                        Don't have an account? 
                        <Link to={'/register'} className='text-blue-medium dark:text-blue-400 ml-2'>
                            Sign up
                        </Link>
                    </span>
                </form>
            </div>
        </div>
    )
}