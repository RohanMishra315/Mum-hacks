import React from 'react';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import Hero from './components/Hero';



const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Hero />
        
        
        <Routes>
          <Route path="/" element={<ProductGrid />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
    
  );
};

export default App;
