import { useState, useEffect } from 'react';
import { Modal } from '../../helpers/Modal';
import { useClearCartMutation, useGetAllShoppingCartQuery, useShoppingCartDeleteItemMutation } from '../../redux/api/shoppingCartApi';

export const CartModal = () => {
  const [cartItems, setCartItems] = useState([]);
  const { data, refetch } = useGetAllShoppingCartQuery();
  const [clearCartMutation] = useClearCartMutation();
  const [shoppingCartDeleteItemMutation] = useShoppingCartDeleteItemMutation();
  
  useEffect(() => {
    setCartItems(data?.items || []);
  }, [data]);

  const handleRemove = async (id) => {
    try {
      await shoppingCartDeleteItemMutation(id);
    } catch (e) {
      console.error(e);
    }

    refetch()
  };

  const clearCart = async () => {
    try {
      await clearCartMutation();
      setCartItems([]);
      localStorage.removeItem('cart');
    } catch (e) {
      console.error(e);
    }
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return <div className="p-4 text-gray-500 dark:text-gray-400">Your cart is empty.</div>;
  }

  return (
    <div>
      <table>
        <tbody>
          {cartItems?.map(item => (
            <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4">
                <img src={item?.image} className="w-16 md:w-32 max-w-full max-h-full" alt={item.title} />
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {item.title}
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  {item.quantity}
                </div>
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                ${item.price}
              </td>
              <td className="px-6 py-4">
                <button onClick={() => handleRemove(item?.productId)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex justify-between items-center">
        <button onClick={clearCart} className='flex h-7 w-1/6 items-center justify-center bg-custom-purple text-white duration-100 hover:bg-on-hover-purple'>Empty Cart</button>
        <div className="font-bold text-xl">
          Total: ${total.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
