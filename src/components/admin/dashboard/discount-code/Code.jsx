import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setDiscountCode } from '../../../../redux/slices/discountCodeSlice';

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

    useEffect(() => {
        const storedCode = localStorage.getItem('discount-code');

        if (storedCode) {
            setRandomString(storedCode);
        } else {
            const newCode = generateRandomString(6);
            dispatch(setDiscountCode(newCode))
            setRandomString(newCode);
        }
    }, []);

    return (
        <div className="absolute flex flex-col text-[5.5vw] w-[80vw] items-center text-green-dark dark:text-white">
            <h2>{randomString}</h2>
        </div>
    );
};
