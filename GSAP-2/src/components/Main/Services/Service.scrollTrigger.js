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
    tl.from(el.childNodes[0], {
        x: -300,
        opacity: 0,
        duration: 2,
        ease: 'power1',

        scrollTrigger: {
            trigger: el,
            id: `section-${index + 1}`,
            start: 'top center+=80',
            end: 'bottom bottom-=200',
            scrub: true,
            snap: true,
            markers: true,
        },
    }).to(el.childNodes[1], {
        transform: 'scale(0)',
        duration: 2,
        ease: 'power2.inOut',

        scrollTrigger: {},
    });
});
