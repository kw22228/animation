import React from 'react';
import * as s from './Testimonials.style';
import Slider from 'react-slick';

import '../../../../node_modules/slick-carousel/slick/slick.css';
import '../../../../node_modules/slick-carousel/slick/slick-theme.css';

import Card from '../../Card/Card';

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <s.Section>
            <s.Title>Few good words about us!</s.Title>
            <s.Carousel>
                <Slider {...settings}>
                    <Card //
                        text="CodeBucks has been essential part of our business. I would definetly recommend CodeBucks. It has been amazing to have them."
                        name="Jenny (CodeCall)"
                        image="avatar-1"
                    />
                    <Card //
                        text="CodeBucks has been essential part of our business. I would definetly recommend CodeBucks. It has been amazing to have them."
                        name="Bob (Zendesk)"
                        image="avatar-2"
                    />
                    <Card //
                        text="CodeBucks has been essential part of our business. I would definetly recommend CodeBucks. It has been amazing to have them."
                        name="Cassy (Asus)"
                        image="avatar-3"
                    />
                    <Card //
                        text="CodeBucks has been essential part of our business. I would definetly recommend CodeBucks. It has been amazing to have them."
                        name="Jenny (CodeCall)"
                        image="avatar-4"
                    />
                </Slider>
            </s.Carousel>
        </s.Section>
    );
};

export default Testimonials;
