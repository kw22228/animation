import React from 'react';
import * as s from './Footer.style';

import Logo from '../../assets/Svgs/star_white_48dp.svg';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const Footer = () => {
    const { scroll } = useLocomotiveScroll();

    const handleSCroll = id => {
        let element = document.querySelector(id);

        scroll.scrollTo(element, {
            offset: '0',
            duration: '2000',
            easing: [0.25, 0.0, 0.35, 1.0],
        });
    };

    return (
        <s.Section>
            <s.LogoContainer>
                <img src={Logo} alt="Wibe Studio" data-scroll data-scroll-speed="2" />
                <h3 data-scroll data-scroll-speed="2">
                    Wibe Studio
                </h3>
            </s.LogoContainer>
            <s.Footer //
                initial={{ y: '-400px' }}
                whileInView={{ y: 0 }}
                viewport={{ once: false }}
                transition={{
                    duration: 1.5,
                }}
            >
                <ul>
                    <li onClick={() => handleSCroll('#home')}>home</li>
                    <li onClick={() => handleSCroll('.about')}>about</li>
                    <li onClick={() => handleSCroll('#shop')}>shop</li>
                    <li onClick={() => handleSCroll('#newArrival')}>new arrival</li>
                    <li>
                        <a href="http://google.com" target="_blank" rel="noreferrer">
                            look book
                        </a>
                    </li>
                    <li>
                        <a href="http://google.com" target="_blank" rel="noreferrer">
                            reviews
                        </a>
                    </li>
                </ul>
                <s.Bottom>
                    <span data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">
                        &copy; {new Date().getFullYear()}. All Rights Reserved.
                    </span>
                    <span data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
                        Made with &hearts; by &nbsp;
                        <a href="https://github.com/kw22228" target="_blank" rel="noreferrer">
                            JW
                        </a>
                    </span>
                </s.Bottom>
            </s.Footer>
        </s.Section>
    );
};

export default Footer;
