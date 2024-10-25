import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const { cartItems } = useCart();

  return (
    <nav className="flex items-center justify-between p-4 bg-blue-600 text-white">
      <Link to="/" className="text-2xl font-bold">Marketplace</Link>
      <Link to="/cart" className="flex items-center">
        Cart ({cartItems.length})
      </Link>
      
    </nav>
  );
};

export default Navbar;
