import React from 'react';
import './style.scss';

import SectionHeader from '../SectionHeader';
const Footer = () => {
    return (
        <section className="footer">
            <SectionHeader title="Made in" />
            <h1 className="location" id="location-text">
                JW.
            </h1>
        </section>
    );
};

export default Footer;