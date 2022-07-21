import React from 'react';

import CustomCursor from '../custom/Cursor';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Featured from '../components/Featured';
import About from '../components/About';
import Gallary from '../components/Gallary';

import '../styles/home.scss';

const Home = () => {
    return (
        <>
            <CustomCursor />
            <div className="main-container" id="main-container">
                <Navbar />
                <Header />
                <Featured />
                <About />
                <Gallary />
                <Footer />
            </div>
        </>
    );
};

export default Home;
