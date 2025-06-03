import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './Landing_Page/Home/HomePage';
import AboutPage from './Landing_Page/About/AboutPage';
import Pricing from './Landing_Page/Home/Pricing';
import ProductsPage from './Landing_Page/Products/ProductsPage';
import SignUp from './Landing_Page/Signup/SignUp';
import SupportPage from './Landing_Page/Support/SupportPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
    <HomePage />
    <AboutPage />
    <Pricing />
    <ProductsPage />
    <SignUp />
    <SupportPage />

    </div>
  </React.StrictMode>
);
