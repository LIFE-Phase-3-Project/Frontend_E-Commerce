import React, { useEffect, useState } from 'react';
import { useGetOrderByUserIdQuery } from '../../redux/api/ordersApi';
import { useCreatePaymentMutation } from '../../redux/api/paymentsApi';

export const CheckOut = () => {
    const { data } = useGetOrderByUserIdQuery(localStorage.getItem('userId') || null);
    const [createPayment] = useCreatePaymentMutation(); 

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
    const [showOrders, setShowOrders] = useState(false); 
    const [showOverlay, setShowOverlay] = useState(false); 
    const [showOrdersOverlay, setShowOrdersOverlay] = useState(false); 
    const [attempts, setAttempts] = useState(0);
    const [canTryAgain, setCanTryAgain] = useState(true);
    const [orders, setOrders] = useState(data || []); 

    const discountCodeInLocalStorage = localStorage.getItem('discount-code') || '';

    const getOrderTotal = () => {
        let total = 0;
        for (let i = 0; i < orders.length; i++) {
            total += orders[i].orderTotal;
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

    const handlePurchase = async () => {
        if (paymentMethod === 'stripe') {
          try {
            console.log("orders")
            console.log(orders)
            const paymentData = {
              description: "Order succeded",
              orderId: orders[orders?.length -1].id
            };
            
            const res = await createPayment(paymentData).unwrap();
            
            if (res && res.url) {
              window.location.href = res.url;
            } else {
              console.error('Invalid response from payment creation');
            }
          } catch (error) {
            console.error('Payment creation failed:', error);
          }
        } else if (paymentMethod === 'cash') {
          // Handle cash payment logic if needed
        }
      };
    const calculateTotalAfterDiscount = () => {
        return totalAmount - discountAmount + shippingPrice;
    };

    const toggleDiscountCode = () => {
        setShowDiscount(!showDiscount);
        setShowOverlay(!showOverlay);
    };

    const toggleOrders = () => {
        setShowOrders(!showOrders);
        setShowOrdersOverlay(!showOrdersOverlay);
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

    const handleRemoveOrder = (orderId) => {
        if (orderId) { 
            const updatedOrders = orders.filter(order => order?.id !== orderId);
            setOrders(updatedOrders);
            getOrderTotal(); 
        } else {
            console.error("Order ID is undefined or invalid");
        }
    };
    
    useEffect(() => {
        setOrders(data || []);
    }, [data]);

    useEffect(() => {
        getOrderTotal(); 
    }, [orders]);

    return (
        <div className="checkout max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-lg dark:bg-custom-blue">
            {showOverlay && (
                <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleDiscountCode}></div>
            )}
            {showOrdersOverlay && (
                <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleOrders}></div>
            )}

            <div className="summary mb-6 dark:bg-custom-blue">
                <h2 className="text-2xl font-semibold mb-4 dark:text-cream">Order Summary</h2>
                {canTryAgain && (
                    <button onClick={toggleDiscountCode} className="bg-blue-500 text-white py-2 px-4 rounded">
                        Discount Code
                    </button>
                )}
                <button onClick={toggleOrders} className="bg-blue-500 ml-2 text-white py-2 px-4 rounded">
                    Show orders
                </button>

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

                {showOrders && (
                    <div className="discount-code mt-4 p-4 bg-gray-100 border rounded-md dark:bg-custom-blue z-50 relative ">
                        <h2 className='text-center text-xl'>Orders</h2>
                        {
                            orders?.map((order) => (
                                <div key={order.id} className='flex items-center justify-between'>
                                    <h2>{order.name} | {order.orderTotal}&#8364;</h2>
                                    <button onClick={() => handleRemoveOrder(order.id)} className="text-red-500">Remove</button>
                                </div>
                            ))
                        }
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
                        <label className="block text-gray-700 mb-2 dark:text-cream">Zip Code:</label>
                        <input
                            type="text"
                            name="zip"
                            value={shippingInfo.zip}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md dark:bg-custom-blue"
                            required
                        />
                    </div>
                </form>
            </div>
            <div className="payment-method mb-6">
                <h2 className="text-2xl font-semibold mb-4 dark:text-cream">Payment Method</h2>
                <div className="flex space-x-4">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            value="cash"
                            checked={paymentMethod === 'cash'}
                            onChange={handlePaymentMethodChange}
                            className="mr-2"
                        />
                        Cash
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            value="stripe"
                            checked={paymentMethod === 'stripe'}
                            onChange={handlePaymentMethodChange}
                            className="mr-2"
                        />
                        Stripe
                    </label>
                </div>
            </div>
            <button
                onClick={handlePurchase}
                className="w-full py-3 bg-blue-500 text-white rounded-md"
            >
                Complete Purchase
            </button>
        </div>
    );
};
