import React from 'react';

import NavBar from '../NavBar';

import Hero from './Hero';
import Awards from './Awards';
import Statistics from './Statistics';
import Pricing from './Pricing';
import Education from './Education';

import OpenAccount from '../OpenAccount';
import Footer from '../Footer';


function HomePage() {
    return ( 
        <>
            <NavBar />
            <Hero />
            <Awards />
            <Statistics />
            <Pricing />
            <Education />
            <OpenAccount />
            <Footer />
        </>
     );
}

export default HomePage;