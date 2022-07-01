import React, { useLayoutEffect } from 'react';
import * as s from './NewArraval.style';
import images from '../../assets/Images/newArrival';
import Product from './Product/Product';
import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef } from 'react';

const NewArrival = () => {
    gsap.registerPlugin(ScrollTrigger);

    const sectionRef = useRef(null);
    const scrollingRef = useRef(null);

    useLayoutEffect(() => {
        let element = sectionRef.current;
        let scrollingElement = scrollingRef.current;

        let t1 = gsap.timeline();

        setTimeout(() => {
            t1.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top top',
                    end: 'bottom+=100% top-=100%',
                    scroller: '.Main', // locomotive element
                    scrub: true, // true일시 화면을 되돌릴때 애니메이션도 같이 되돌아감
                    pin: true, //화면에 element를 고정한후 애니메이션 실행
                    // markers: true,
                },
                // We have to increase scrolling height of this section same as the scrolling element width
                // 이섹션의 width만큼 height를 증가시켜야함 (스크롤 애니메이션을 위해서)
                ease: 'none',
            });

            // Vertical Scrolling
            t1.fromTo(
                scrollingElement,
                { y: '0' },
                {
                    y: '-75%',
                    scrollTrigger: {
                        trigger: scrollingElement,
                        start: 'top top',
                        end: 'bottom bottom',
                        scroller: '.Main', // locomotive element
                        scrub: true, // true일시 화면을 되돌릴때 애니메이션도 같이 되돌아감
                        // markers: true,
                    },
                }
            );

            ScrollTrigger.refresh();
        }, 1000);

        return () => {
            t1.kill();
            ScrollTrigger.kill();
        };
    }, []);

    return (
        <s.Section ref={sectionRef} id="newArrival">
            <s.Overlay />
            <s.Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
                New Arrivals
            </s.Title>

            <s.Container ref={scrollingRef}>
                {images &&
                    images.map(({ image, title }) => (
                        <Product img={image} key={image} title={title} />
                    ))}
            </s.Container>

            <s.Text data-scroll data-scroll-speed="-4">
                There is new collection available for cool clothes in all sizes. This collection is
                a great way to find a new look for you. It offers a variety of cool apparel styles
                to fit your taste, while you can also find some cool clothes that you can wear
                everyday.
                <br />
                <br />
                The first line of clothing you will see on this collection is for men. The
                collection also includes three new styles for women.
                <br />
                <br />
                Give it a try and experience a new look.
            </s.Text>
        </s.Section>
    );
};

export default NewArrival;
