import React from 'react';
import * as s from './Contact.style';

import Facebook from '../../../assets/facebook-square-brands.svg';
import LinkedIn from '../../../assets/linkedin-brands.svg';
import Twitter from '../../../assets/twitter-square-brands.svg';
import Instagram from '../../../assets/instagram-square-brands.svg';

const Contact = () => {
    return (
        <s.ContactSection id="contact">
            <s.Title>Get in touce</s.Title>
            <s.Icons>
                <a href="#">
                    <img src={Facebook} alt="Facebook" />
                </a>
                <a href="#">
                    <img src={LinkedIn} alt="LinkedIn" />
                </a>
                <a href="#">
                    <img src={Twitter} alt="Twitter" />
                </a>
                <a href="#">
                    <img src={Instagram} alt="Instagram" />
                </a>
            </s.Icons>
            <s.Form>
                <s.Row>
                    <input type="text" name="name" placeholder="Your name" />
                    <input type="email" name="email" placeholder="Enter working email id" />
                </s.Row>
                <textarea name="message" placeholder="Your messsage" cols="30" rows="2"></textarea>
                <div>
                    <button>Submit</button>
                </div>
            </s.Form>
        </s.ContactSection>
    );
};

export default Contact;
