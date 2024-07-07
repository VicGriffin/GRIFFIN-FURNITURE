import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header.jsx';
import Home from './Pages/home/Home.jsx';
import Products from './Pages/products/Products.jsx';
import Store from './Pages/store/Store.jsx';
import Contact from './Pages/contact-us/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
import Login from './Pages/login/Login.jsx';
import Signup from './Pages/signup/Signup.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/login" element={<Login />} /> {/* Changed 'component' to 'element' */}
          <Route path="/signup" element={<Signup />} /> {/* Changed 'component' to 'element' */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;