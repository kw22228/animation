import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';
import * as s from './Shop.style';

import Product from './Product/Product';
import images from '../../assets/Images/shop';
import { useLayoutEffect } from 'react';

const Shop = () => {
    //GSAP 등록
    gsap.registerPlugin(ScrollTrigger);

    const ref = useRef(null);
    const leftRef = useRef(null);
    const horizontalRef = useRef(null);

    useLayoutEffect(() => {
        let element = ref.current;
        let leftElement = leftRef.current;
        let scrollingElement = horizontalRef.current;

        //스크롤 돌릴 element의 width
        let pinWrapWidth = scrollingElement.offsetWidth;
        let rightWidth = window.innerWidth - leftElement.offsetWidth;
        let t1 = gsap.timeline();

        setTimeout(() => {
            t1.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top top',
                    end: pinWrapWidth,
                    scroller: '.Main', // locomotive element
                    scrub: true, // true일시 화면을 되돌릴때 애니메이션도 같이 되돌아감
                    pin: true, //화면에 element를 고정한후 애니메이션 실행
                },
                // We have to increase scrolling height of this section same as the scrolling element width
                // 이섹션의 width만큼 height를 증가시켜야함 (스크롤 애니메이션을 위해서)
                height: `${scrollingElement.scrollWidth}px`,
                ease: 'none',
            });

            // Horizontal Scrolling
            t1.to(scrollingElement, {
                scrollTrigger: {
                    trigger: scrollingElement,
                    start: 'top top',
                    end: pinWrapWidth,
                    scroller: '.Main', // locomotive element
                    scrub: true, // true일시 화면을 되돌릴때 애니메이션도 같이 되돌아감
                },
                // We have to increase scrolling height of this section same as the scrolling element width
                // 이섹션의 width만큼 height를 증가시켜야함 (스크롤 애니메이션을 위해서)
                x: -pinWrapWidth + rightWidth,
                ease: 'none',
            });

            ScrollTrigger.refresh();

            return () => {
                t1.kill();
                ScrollTrigger.kill();
            };
        }, 1000);
    }, []);

    return (
        <s.Section ref={ref} id="shop">
            <s.Title data-scroll data-scroll-speed="-1">
                New Collection
            </s.Title>
            <s.Left ref={leftRef}>
                <p>
                    The brand new collection is currently being developed in USA. We create our
                    products using best quality material, including the use of some of the pure
                    fabrics to make our products. All products are made using the best materials,
                    from the finest cotton to the finest fabrics.
                    <br />
                    <br />
                    We have lots of different clothing options like shoes, jackets and dresses. Not
                    only clothes but we also provide unique Jewellery as well. It is great for us to
                    carry our new clothes all around the country and look different.
                </p>
            </s.Left>
            <s.Right ref={horizontalRef}>
                {images &&
                    images.map(({ image, title }) => (
                        <Product img={image} key={image} title={title} />
                    ))}
            </s.Right>
        </s.Section>
    );
};

export default Shop;
