import React, { useState } from 'react';

export const CheckOut = () => {
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
       
    };

    const calculateTotalAfterDiscount = () => {
        return totalAmount - discountAmount + shippingPrice;
    };

    return (
        <div className="checkout max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-lg dark:bg-custom-blue">
            <div className="summary mb-6 dark:bg-custom-blue">
                <h2 className="text-2xl font-semibold mb-4 dark:text-cream ">Order Summary</h2>
                <p className="mb-2 dark:text-cream">Total Amount: <span >${totalAmount.toFixed(2)}</span></p>
                <p className="mb-2 dark:text-cream">Discount: <span className=" text-green-400">-${discountAmount.toFixed(2)}</span></p>
                <p className="mb-2 dark:text-cream">Shipping Price: <span >${shippingPrice.toFixed(2)}</span></p>
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
