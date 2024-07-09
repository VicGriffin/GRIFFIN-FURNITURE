import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { AuthProvider } from './authContext';
import Header from './components/header/Header.jsx';
import Home from './Pages/home/Home.jsx';
import Products from './Pages/products/Products.jsx';
import Store from './Pages/store/Store.jsx';
import Contact from './Pages/contact-us/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
import Login from './Pages/login/Login.jsx';
import Signup from './Pages/signup/Signup.jsx';
import Cart from './components/cart/Cart.jsx';

function App() {
  const [products, setProducts] = useState([]);

  return (
    <AuthProvider> 
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products setProducts={setProducts} />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/cart" element={<Cart products={products} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
