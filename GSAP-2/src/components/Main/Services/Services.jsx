import React from 'react';
import * as s from './Services.style';

import SvgBlock from '../../SvgBlock/SvgBlock';
import TextBlock from '../../TextBlock/TextBlock';

import Tube from '../../../assets/3dtube.png';
import Cone from '../../../assets/3dtriangle.png';
import Capsule from '../../../assets/3dcapsule.png';

const Services = () => {
    return (
        <s.ServiceSection>
            <s.Background>
                <s.Title>What we do</s.Title>
                <s.Line />
                <s.Triangle />
            </s.Background>

            <s.Content>
                <TextBlock //
                    topic="Design"
                    title="We build award winning Designs"
                    subText="We help clients to build great design to attract more customer"
                />
                <s.OBJ>
                    <img src={Tube} alt="Tube" width="400" height="400" />
                </s.OBJ>
                <SvgBlock svg="Design.svg" alt="Design" />
            </s.Content>

            <s.Content>
                <TextBlock //
                    topic="Develope"
                    title="We Develope high quality Web & App"
                    subText="WWe build appropriate solution to develope your website & app with best tools available"
                />
                <s.OBJ>
                    <img src={Cone} alt="Cone" width="400" height="400" />
                </s.OBJ>
                <SvgBlock svg="Develope.svg" alt="Develope" />
            </s.Content>

            <s.Content>
                <TextBlock //
                    topic="Support"
                    title="We provide support for your digital presence"
                    subText="Once your system is online, we will stay on hand to help you use it and provide technical support and maintenance
                    your business"
                />
                <s.OBJ>
                    <img src={Capsule} alt="Capsule" width="400" height="400" />
                </s.OBJ>
                <SvgBlock svg="Support.svg" alt="Support" />
            </s.Content>
        </s.ServiceSection>
    );
};

export default Services;
