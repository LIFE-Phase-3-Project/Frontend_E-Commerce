import React, { useEffect, useState } from 'react';
import { useGetOrderByUserIdQuery } from '../../redux/api/ordersApi';

export const CheckOut = () => {
    const { data } = useGetOrderByUserIdQuery(localStorage.getItem('userId') || null);

    const [shippingInfo, setShippingInfo] = useState({
        name: '',
        address: '',
        city: '',
        state: '',
        zip: '',
    });

    const [paymentMethod, setPaymentMethod] = useState('cash');
    const [discountCode, setDiscountCode] = useState('');
    const [discountAmount, setDiscountAmount] = useState(0);
    const [shippingPrice, setShippingPrice] = useState(0); 
    const [totalAmount, setTotalAmount] = useState(0);
    const [showDiscount, setShowDiscount] = useState(false); 
    const [showOverlay, setShowOverlay] = useState(false); 
    const [attempts, setAttempts] = useState(0);
    const [canTryAgain, setCanTryAgain] = useState(true);

    const discountCodeInLocalStorage = localStorage.getItem('discount-code') || '';

    const getOrderTotal = () => {
        let total = 0;
        for (let i = 0; i < data?.length; i++) {
            total += data[i].orderTotal;
        }
        setTotalAmount(total);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setShippingInfo({
            ...shippingInfo,
            [name]: value,
        });
    };

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handlePurchase = () => {
        // Purchase logic here
    };

    const calculateTotalAfterDiscount = () => {
        return totalAmount - discountAmount + shippingPrice;
    };

    const toggleDiscountCode = () => {
        setShowDiscount(!showDiscount);
        setShowOverlay(!showOverlay);
    };

    const handleDiscountCodeSubmit = () => {
        if (discountCode === discountCodeInLocalStorage) {
            const discountPercentage = 10;
            const discount = (totalAmount * discountPercentage) / 100;
            setDiscountAmount(discount);
            setShowDiscount(false);
            setShowOverlay(false);
        } else {
            if (attempts >= 2) {
                setCanTryAgain(false);
                setTimeout(() => setCanTryAgain(true), 60000); 
            }
            setAttempts(attempts + 1);
        }
    };

    useEffect(() => {
        getOrderTotal();
    }, [data]);

    return (
        <div className="checkout max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-lg dark:bg-custom-blue">
            {showOverlay && (
                <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleDiscountCode}></div>
            )}

            <div className="summary mb-6 dark:bg-custom-blue">
                <h2 className="text-2xl font-semibold mb-4 dark:text-cream">Order Summary</h2>
                {canTryAgain && (
                    <button onClick={toggleDiscountCode} className="bg-blue-500 text-white py-2 px-4 rounded">
                        Discount Code
                    </button>
                )}
                {showDiscount && (
                  <div className="discount-code mt-4 p-4 bg-gray-100 border rounded-md dark:bg-custom-blue z-50 relative">
                    <label htmlFor='discount-code' className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Discount code
                    </label>
                    <input 
                        type="text" 
                        id="discount-code" 
                        value={discountCode}
                        onChange={(e) => setDiscountCode(e.target.value)}
                        placeholder='Enter discount code' 
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
                    />
                    
                    {canTryAgain && attempts > 0 && (
                        <p className="text-gray-600 dark:text-gray-300">Remaining Attempts: {3 - attempts}</p>
                    )}

                    <button
                        onClick={handleDiscountCodeSubmit}
                        disabled={!canTryAgain}
                        className={`mt-2 w-full text-white py-2 rounded-md ${!canTryAgain ? 'bg-gray-400' : 'bg-green-600'}`}
                    >
                        Apply Discount
                    </button>
                    
                    {!canTryAgain && (
                        <p className="text-red-500 mt-2">You've exceeded the maximum attempts. Try again later.</p>
                    )}
                </div>
                )}
                <p className="mb-2 dark:text-cream">Total Amount: <span>${totalAmount.toFixed(2)}</span></p>
                <p className="mb-2 dark:text-cream">Discount: <span className="text-green-400">-${discountAmount.toFixed(2)}</span></p>
                <p className="mb-2 dark:text-cream">Shipping Price: <span>${shippingPrice.toFixed(2)}</span></p>
                <p className="mb-2 dark:text-cream">Total After Discount: <span className="font-bold text-xl text-green-600">${calculateTotalAfterDiscount().toFixed(2)}</span></p>
            </div>
            <div className="shipping-form mb-6">
                <h2 className="text-2xl font-semibold mb-4 dark:text-cream">Shipping Information</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2 dark:text-cream">Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={shippingInfo.name}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md dark:bg-custom-blue"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2 dark:text-cream">Address:</label>
                        <input
                            type="text"
                            name="address"
                            value={shippingInfo.address}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md dark:bg-custom-blue"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2 dark:text-cream">City:</label>
                        <input
                            type="text"
                            name="city"
                            value={shippingInfo.city}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md dark:bg-custom-blue"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2 dark:text-cream">State:</label>
                        <input
                            type="text"
                            name="state"
                            value={shippingInfo.state}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md dark:bg-custom-blue"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2 dark:text-cream">ZIP Code:</label>
                        <input
                            type="text"
                            name="zip"
                            value={shippingInfo.zip}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md dark:bg-custom-blue"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2 dark:text-cream">Payment Method:</label>
                        <select
                            value={paymentMethod}
                            onChange={handlePaymentMethodChange}   
                            className="w-full px-3 py-2 border rounded-md dark:bg-custom-blue"
                        >
                            <option value="cash">Cash</option>
                            <option value="stripe">Stripe</option>
                        </select>
                    </div>
                </form>
            </div>
            <button
                onClick={handlePurchase}
                className="w-full bg-on-hover-pink text-white py-2 rounded-md hover:bg-on-hover-purple"
            >
                Purchase
            </button>
        </div>
    );
};
