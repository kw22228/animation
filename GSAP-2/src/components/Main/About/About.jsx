import React from 'react';
import * as s from './About.style';

import waves from '../../../assets/waves.svg';
import hand from '../../../assets/hand.svg';
import rocket from '../../../assets/rocket image.png';
import human from '../../../assets/human.svg';

const About = () => {
    return (
        <s.AboutSection id="about">
            <s.Waves src={waves} alt="waves" width="400" height="400" />
            <s.Hand>
                <img src={hand} alt="hand" width="400" height="400" />
            </s.Hand>

            <s.Main>
                <div>
                    <s.Title>About Us</s.Title>
                    <s.CurvedLine />
                </div>
                <s.Content>
                    <s.Rocket>
                        <img src={rocket} alt="rocket" width="400" height="400" />
                    </s.Rocket>
                    <s.AboutText>
                        <s.Human>
                            <img src={human} alt="human" width="400" height="400" />
                        </s.Human>
                        <s.Text>
                            We help our customers to tell about themselves, to grow and stand out in
                            an increasingly competitive digital world, through creative projects
                            that are able to attract and involve, creating strategic value.
                        </s.Text>
                        <div>
                            <s.Circle bgColor="purple" />
                            <s.Circle bgColor="pink" />
                            <s.Circle bgColor="black" />
                        </div>
                    </s.AboutText>
                </s.Content>
            </s.Main>
        </s.AboutSection>
    );
};

export default About;
