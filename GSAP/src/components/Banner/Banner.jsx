import React from 'react';
import * as s from './Banner.style';

const Banner = () => {
    return (
        <s.Section>
            <s.Container id="up">
                <s.Banner>
                    <span
                        data-scroll
                        data-scroll-direction="horizontal"
                        data-scroll-speed="8"
                        data-scroll-target="#up"
                    >
                        Fashion is the armour{' '}
                    </span>
                </s.Banner>
                <s.Banner>
                    <span
                        data-scroll
                        data-scroll-direction="horizontal"
                        data-scroll-speed="-6"
                        data-scroll-target="#up"
                    >
                        to survive everyday life
                    </span>
                </s.Banner>
                <s.Banner>
                    <span
                        data-scroll
                        data-scroll-direction="horizontal"
                        data-scroll-speed="6"
                        data-scroll-target="#up"
                    >
                        One is never over-dressed or
                    </span>
                </s.Banner>
                <s.Banner>
                    <span
                        data-scroll
                        data-scroll-direction="horizontal"
                        data-scroll-speed="-4"
                        data-scroll-target="#up"
                    >
                        under-dressed
                    </span>
                </s.Banner>
                <s.Banner>
                    <span
                        data-scroll
                        data-scroll-direction="horizontal"
                        data-scroll-speed="6"
                        data-scroll-target="#up"
                    >
                        with a Little Black Dress
                    </span>
                </s.Banner>
            </s.Container>
        </s.Section>
    );
};

export default Banner;
