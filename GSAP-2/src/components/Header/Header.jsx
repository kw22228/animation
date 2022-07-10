import React, { useState } from 'react';
import * as s from './Header.style';

import logo from '../../assets/logo.svg';

const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(prev => !prev);

    return (
        <s.Header>
            <s.Logo to="/">
                <img src={logo} alt="Logo" />
                <h3>CodeBucks</h3>
            </s.Logo>
            <s.Nav>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contact">
                    <s.Button>Contact Us</s.Button>
                </a>
            </s.Nav>
            <s.HamburgerBtn onClick={handleClick} click={click} />
            <s.MobileMenu click={click}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contact">
                    <s.Button>Contact Us</s.Button>
                </a>
            </s.MobileMenu>
        </s.Header>
    );
};

export default Header;
