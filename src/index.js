import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import HomePage from './Landing_Page/Home/HomePage';
import AboutPage from './Landing_Page/About/AboutPage';
import Pricing from './Landing_Page/Home/Pricing';
import ProductsPage from './Landing_Page/Products/ProductsPage';
import SignUp from './Landing_Page/Signup/SignUp';
import SupportPage from './Landing_Page/Support/SupportPage';
import NavBar from './Landing_Page/NavBar';
import Footer from './Landing_Page/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
       <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/products-page" element={<ProductsPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>

);
