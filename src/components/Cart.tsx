


import React from 'react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { cartItems } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="border p-2 mb-2 rounded-md shadow-md">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-md" />
              <div className="ml-4">
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-gray-700">${item.price.toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
