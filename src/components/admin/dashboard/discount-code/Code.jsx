import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeDiscountCode, setDiscountCode } from '../../../../redux/slices/discountCodeSlice';
import { useNavigate } from 'react-router-dom';

const generateRandomString = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

export const Code = () => {
    const [randomString, setRandomString] = useState('');
    const dispatch = useDispatch();
    const discountCode = useSelector(state => state.discountCode.discountCode);
    const navigate = useNavigate();

    useEffect(() => {
        if (!discountCode) {
            const storedCode = localStorage.getItem('discount-code');

            if (storedCode) {
                setRandomString(storedCode);
                dispatch(setDiscountCode(storedCode));
            } else {
                const newCode = generateRandomString(6);
                dispatch(setDiscountCode(newCode));
                setRandomString(newCode);
                localStorage.setItem('discount-code', newCode);
            }
        } else {
            setRandomString(discountCode);
        }
    }, [dispatch, discountCode]);

    const handleClick = () => {
        console.log("delete");
        dispatch(removeDiscountCode());
        localStorage.removeItem('discount-code');
        navigate('/dashboard');
    };

    return (
        <div className="absolute flex flex-col text-[5.5vw] w-[80vw] items-center text-green-dark dark:text-white">
            <h2>{randomString}</h2>
            {discountCode && <button onClick={handleClick} className='text-xl'>Delete Discount code</button>}
        </div>
    );
};
