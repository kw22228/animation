import React from 'react';
import * as s from './Footer.style';

import Twitter from '../../assets/twitter-square-brands.svg';
import Instagram from '../../assets/instagram-square-brands.svg';
import Gmail from '../../assets/envelope-open-solid.svg';

const Footer = () => {
    return (
        <s.Footer>
            <s.LeftText>&copy; 2022 Built and Design by JW.</s.LeftText>
            <s.RightText>
                Reach out to me via😊
                <a href="#">
                    <img src={Twitter} alt="Twitter" />
                </a>
                <a href="#">
                    <img src={Instagram} alt="Instagram" />
                </a>
                <a href="mailto:kw2282222@gmail.com">
                    <img src={Gmail} alt="Gmail" />
                </a>
            </s.RightText>
        </s.Footer>
    );
};

export default Footer;
