import React from 'react';
import * as s from './Main.style';

import About from './About/About';
import Services from './Services/Services';
import Contact from './ConTact/Contact';
import Testimonials from './Testimonials/Testimonials';

import Pink from '../../assets/blobPink.png';
import White from '../../assets/blobWhite.png';
import Purple from '../../assets/blobPurple.png';
import Arrow from '../../assets/Arrow Right.svg';
import Mobile from '../../assets/mobile.svg';

const Main = () => {
    return (
        <s.Container id="home">
            <s.MainSection>
                <s.Blobs>
                    <s.PinkBlob>
                        <img src={Pink} alt="Pink Blob" width="400" height="400" />
                    </s.PinkBlob>

                    <s.WhiteBlob>
                        <img src={White} alt="White Blob" width="400" height="400" />
                    </s.WhiteBlob>

                    <s.PurpleBlob>
                        <img src={Purple} alt="Purple Blob" width="400" height="400" />
                    </s.PurpleBlob>
                </s.Blobs>
                <s.MainContent>
                    <s.LeftBlock>
                        <s.Topic>
                            <s.Circle />
                            <span>We Build Web</span>
                        </s.Topic>
                        <s.Title>Transforming your digital presence</s.Title>
                        <s.SubText>
                            We help fast growing companies build award winning websites
                        </s.SubText>
                        <s.CTA>
                            Get in touce &nbsp;
                            <img src={Arrow} alt="CTA" width="400" height="400" />
                        </s.CTA>
                    </s.LeftBlock>
                    <s.MobileSvg src={Mobile} alt="Mobile Svg" width="400" height="400" />
                </s.MainContent>
            </s.MainSection>

            <About />
            <Services />
            <Testimonials />
            <Contact />
        </s.Container>
    );
};

export default Main;
