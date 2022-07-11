import React, { useLayoutEffect, useRef, useState } from 'react';
import * as s from './Header.style';
import handleScrollUp from '../../utils/handleScrollUp';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import logo from '../../assets/logo.svg';
import { device } from '../../styles/variable';

const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(prev => !prev);

    const ref = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        const element = ref.current;
        const mq = window.matchMedia(`(${device.mobileSM})`);

        if (mq.matches) {
            gsap.to(element, {
                position: 'fixed',
                top: '0',
                left: '0',
                right: '0',
                padding: '1rem 2.5rem',
                borderRadius: '0 0 50px 50px',
                border: '2px solid white',

                duration: 1,
                ease: 'power1.out',

                scrollTrigger: {
                    trigger: element,
                    start: 'bottom+=200 top',
                    end: '+=300',
                    scrub: true,
                },
            });
        } else {
            gsap.to(element, {
                position: 'fixed',
                top: '1rem',
                left: '3rem',
                right: '3rem',
                padding: '1.5rem 2rem',
                borderRadius: '50px',
                border: '3px solid white',

                duration: 1,
                ease: 'power1.out',

                scrollTrigger: {
                    trigger: element,
                    start: 'bottom+=200 top',
                    end: '+=300',
                    scrub: true,
                },
            });
        }

        return () => {
            ScrollTrigger.kill();
        };
    }, []);
    return (
        <s.Header ref={ref}>
            <s.Logo to="/">
                <img src={logo} alt="Logo" />
                <h3>CodeBucks</h3>
            </s.Logo>
            <s.Nav>
                <a href="#home" onClick={() => handleScrollUp('#home')}>
                    Home
                </a>
                <a href="#about" onClick={() => handleScrollUp('#about')}>
                    About
                </a>
                <a href="#services" onClick={() => handleScrollUp('#services')}>
                    Services
                </a>
                <a href="#contact" onClick={() => handleScrollUp('#contact')}>
                    <s.Button>Contact Us</s.Button>
                </a>
            </s.Nav>
            <s.HamburgerBtn onClick={handleClick} click={click} />
            <s.MobileMenu click={click}>
                <a href="#home" onClick={() => handleScrollUp('#home', setClick)}>
                    Home
                </a>
                <a href="#about" onClick={() => handleScrollUp('#about', setClick)}>
                    About
                </a>
                <a href="#services" onClick={() => handleScrollUp('#services', setClick)}>
                    Services
                </a>
                <a href="#contact" onClick={() => handleScrollUp('#contact', setClick)}>
                    <s.Button>Contact Us</s.Button>
                </a>
            </s.MobileMenu>
        </s.Header>
    );
};

export default Header;
