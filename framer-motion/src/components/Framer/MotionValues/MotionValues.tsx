import { useMotionValue, useTransform, useViewportScroll } from 'framer-motion';
import { useEffect } from 'react';
import * as s from '../Framer.style';

const MotionValues = () => {
    // motion value는 react의 state가 변경되도 re-rendering하지 않는다.
    const x = useMotionValue(0);
    const scale = useTransform(x, [-400, 0, 400], [2, 1, 2]);
    const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
    const gradient = useTransform(
        x,
        [-800, 800],
        [
            'linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))',
            'linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))',
        ]
    );

    //Scroll
    const { scrollYProgress } = useViewportScroll();
    const scrollScale = useTransform(scrollYProgress, [0, 1], [1, 10]);

    // useEffect(() => {
    //     x.onChange(() => console.log(scale.get()));
    // }, [x]);

    return (
        <>
            {/* <button onClick={() => x.set(200)}>Click me!!</button> */}
            <s.Wrapper style={{ background: gradient, width: '100%' }}>
                <s.Box
                    style={{
                        x: x,
                        scale: scrollScale,
                        rotateZ: rotateZ,
                    }}
                    drag="x"
                    dragSnapToOrigin
                />
            </s.Wrapper>
        </>
    );
};

export default MotionValues;
