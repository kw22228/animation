import React, { useLayoutEffect, useRef } from 'react';
import * as s from './Services.style';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import SvgBlock from '../../SvgBlock/SvgBlock';
import TextBlock from '../../TextBlock/TextBlock';

import Tube from '../../../assets/3dtube.png';
import Cone from '../../../assets/3dtriangle.png';
import Capsule from '../../../assets/3dcapsule.png';
import { device } from '../../../styles/variable';

const Services = () => {
    const sectionRef = useRef(null);
    const arrowRef = useRef(null);
    const lineRef = useRef(null);
    const triangleRef = useRef(null);

    const revealRef = useRef([]);

    const addToRefs = el => {
        if (el && !revealRef.current.includes(el)) {
            revealRef.current.push(el);
        }
    };

    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        const mq = window.matchMedia(`(${device.mobile})`);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top+=180',
                end: 'bottom bottom',
                pin: arrowRef.current,
                pinReparent: true,
            },
        });

        tl.fromTo(
            lineRef.current,
            {
                height: '15rem',
            },
            {
                height: '3rem',
                duration: 2,
                scrollTrigger: {
                    trigger: lineRef.current,
                    start: 'top top+=200',
                    end: 'bottom top+=220',
                    scrub: true,
                },
            }
        );

        revealRef.current.forEach((el, index) => {
            if (mq.matches) {
            } else {
                tl.from(el.childNodes[0], {
                    x: -300,
                    opacity: 0,
                    duration: 2,
                    ease: 'power0',

                    scrollTrigger: {
                        id: `section-${index + 1}`,
                        trigger: el,
                        start: 'top center+=100',
                        end: 'bottom bottom-=200',
                        scrub: true,
                        snap: true,
                    },
                })
                    .to(el.childNodes[1], {
                        transform: 'scale(0)',
                        duration: 2,
                        ease: 'power2.inOut',

                        scrollTrigger: {
                            id: `section-${index + 1}`,
                            trigger: el.childNodes[1],
                            start: 'top center',
                            end: 'bottom center',
                            scrub: true,
                            snap: true,
                        },
                    })
                    .from(el.childNodes[2], {
                        y: 400,
                        duration: 2,
                        ease: 'power2',

                        scrollTrigger: {
                            id: `section-${index + 1}`,
                            trigger: el,
                            start: 'top center+=100',
                            end: 'bottom bottom-=200',
                            scrub: true,
                            snap: true,
                        },
                    })
                    .to(el, {
                        opacity: 0,
                        ease: 'power2',

                        scrollTrigger: {
                            id: `section-${index + 1}`,
                            trigger: el,
                            start: 'top top+=200',
                            end: 'center top+=300',
                            scrub: true,
                        },
                    });
            }
        });
    }, []);

    return (
        <s.ServiceSection id="services" ref={sectionRef}>
            <s.Background ref={arrowRef}>
                <s.Title>What we do</s.Title>
                <s.Line ref={lineRef} />
                <s.Triangle ref={triangleRef} />
            </s.Background>

            <s.Content ref={addToRefs}>
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

            <s.Content ref={addToRefs}>
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
