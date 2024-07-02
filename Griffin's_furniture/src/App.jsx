import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/header/Header.jsx'
import Home from './Pages/home/Home.jsx'
import Products from './Pages/products/Products.jsx'
import Store from './Pages/store/Store.jsx'
import Contact from './Pages/contact-us/Contact.jsx'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Products" element={<Products/>}/>
        <Route path="/Store" element={<Store/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
