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
import { useGetUserByIDQuery, useLoginUserMutation, useRegisterUserMutation } from '../../../redux/api/authApi';
import { setLogInUser } from '../../../redux/slices/userSlice';
import * as yup from 'yup'
import { registerSchema } from '../../../helpers/validations/UserValidation';


export const RegisterForm = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const isDarkTheme = useSelector(state => state.darkTheme.darkMode);
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const [registerUser] = useRegisterUserMutation();

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(registerSchema)
    })

    const submitForm = async (data) => {
        setErrorMessage(''); 
        try {
            const response = await registerUser({ ...data, roleId: 2 }).unwrap();
            navigate("/login")
        } catch (error) {
            console.log(error)
            setErrorMessage(error?.message || "An error occurred");
        }
    };

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
                <h2 className="text-center text-3xl my-3 text-green-800 dark:text-purple-light capitalize">{t("registerTitle")}</h2>
                    <form className="flex flex-col" onSubmit={handleSubmit(submitForm)}>
                        <div className='mb-2 px-3'>
                            <input placeholder='First Name' {...register('firstName')}
                                className="w-64 h-8 border-2 pl-2 mb-1 bg-transparent
                                border-green-light outline-green-medium text-green-dark
                                dark:border-purple-light dark:outline-purple-dark dark:text-purple-extra-light
                                "
                            />
                            {errors.firstName && <p className='text-red-500'>{errors.firstName.message}</p>}
                        </div>

                        <div className='mb-2 px-3'>
                            <input placeholder='Last Name' {...register('lastName')}
                                className="w-64 h-8 border-2 pl-2 mb-1 bg-transparent
                                border-green-light outline-green-medium text-green-dark
                                dark:border-purple-light dark:outline-purple-dark dark:text-purple-extra-light
                                "
                            />
                            {errors.lastName && <p className='text-red-500'>{errors.lastName.message}</p>}
                        </div>

                        <div className='mb-2 px-3'>
                            <input placeholder='Email' {...register('email')}
                                className="w-64 h-8 border-2 pl-2 mb-1 bg-transparent
                                border-green-light outline-green-medium text-green-dark
                                dark:border-purple-light dark:outline-purple-dark dark:text-purple-extra-light
                                "
                            />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </div>

                        <div className='mb-2 px-3'>
                            <input type="password" 
                                    placeholder='Password'
                                    {...register('password')}
                                    
                                    className="w-64 h-8 border-2 pl-2 mb-1 bg-transparent
                                    border-green-light outline-green-medium text-green-dark
                                    dark:border-purple-light dark:outline-purple-dark dark:text-purple-extra-light"

                                    />
                            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        </div>
                        
                        <div className='mb-2 px-3'>
                            <input type="password" 
                                    placeholder='Confirm Password'
                                    {...register('confirmPassword')}
                                    
                                    className="w-64 h-8 border-2 pl-2 mb-1 bg-transparent
                                    border-green-light outline-green-medium text-green-dark
                                    dark:border-purple-light dark:outline-purple-dark dark:text-purple-extra-light"

                                    />
                            {errors.confirmPassword && <p className='text-red-500'>{errors.confirmPassword.message}</p>}
                        </div>
                        
                        <div className='mb-2 px-3'>
                            <input placeholder='Phone Number' {...register('phoneNumber')}
                                className="w-64 h-8 border-2 pl-2 mb-1 bg-transparent
                                border-green-light outline-green-medium text-green-dark
                                dark:border-purple-light dark:outline-purple-dark dark:text-purple-extra-light
                                "
                            />
                            {errors.phoneNumber && <p className='text-red-500'>{errors.phoneNumber.message}</p>}
                        </div>

                          <div className='mb-2 px-3'>
                            <input placeholder='Address' {...register('address')}
                                className="w-64 h-8 border-2 pl-2 mb-1 bg-transparent
                                border-green-light outline-green-medium text-green-dark
                                dark:border-purple-light dark:outline-purple-dark dark:text-purple-extra-light
                                "
                            />
                            {errors.address && <p className='text-red-500'>{errors.address.message}</p>}
                        </div>

                        {errorMessage && <p className='text-red-500 text-center'>{errorMessage}</p>}
                

                    <div className="log-in-form-footer flex items-center justify-center my-3">
                        <button type='submit'
                                className="w-6/12 py-1 font-medium 
                                    bg-custom-green text-white hover:bg-green-extra-dark
                                    dark:bg-purple-medium dark:hover:bg-purple-dark"
                                    >
                            {t("registerTitle")}
                        </button>
                    </div>

                    <span className='text-center text-green-dark dark:text-purple-300'>Have an account?
                        <Link to={'/login'} className='text-blue-medium dark:text-blue-400 ml-2'>
                            Log in
                        </Link>
                    </span>
                </form>
            </div>
        </div>
    )
}