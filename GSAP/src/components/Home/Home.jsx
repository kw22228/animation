import React from 'react';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import CoverVideo from './CoverVideo/CoverVideo';
import * as s from './Home.style';

const Home = () => {
    return (
        <s.Section>
            <CoverVideo />
            <Logo />
            <NavBar />
        </s.Section>
    );
};

export default Home;
