import React from 'react';
import About from '../components/About/About';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import Home from '../components/Home/Home';
import NewArrival from '../components/NewArraval/NewArrival';
import Shop from '../components/Shop/Shop';

const MainPage = () => {
    return (
        <>
            <Home />
            <About />
            <Shop />
            <Banner />
            <NewArrival />
            <Footer />
        </>
    );
};

export default MainPage;
