import { useState } from 'react';
import * as s from './AnimatePresence.style';
import { AnimatePresence } from 'framer-motion';

// const boxVariants = {
//     initail: {
//         opacity: 0,
//         scale: 0,
//     },
//     visible: {
//         opacity: 1,
//         scale: 1,
//     },
//     leaving: {
//         opacity: 0,
//         scale: 0,
//     },
// };

const sliderVariants = {
    invisible: (isPrev: boolean) => ({
        x: isPrev ? -500 : 500,
        opacity: 0,
        scale: 0,
    }),
    visible: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
        },
    },
    exit: (isPrev: boolean) => ({
        x: isPrev ? 500 : -500,
        opacity: 0,
        scale: 0,
        transition: {
            duration: 0.5,
        },
    }),
};

const AnimatePre = () => {
    // const [showing, setShowing] = useState(false);
    // const toggleShowing = () => setShowing(prev => !prev);

    const data = [1, 2, 3, 4, 5];
    const [visible, setVisible] = useState(data[0]);
    const [isPrev, setIsPrev] = useState(false);

    const nextSlider = () => {
        setVisible(prev => (prev === data[data.length - 1] ? data[0] : prev + 1));
        setIsPrev(false);
    };

    const prevSlider = () => {
        setVisible(prev => (prev === data[0] ? data[data.length - 1] : prev - 1));
        setIsPrev(true);
    };

    return (
        <>
            <s.Wrapper>
                {/* AnimatePresence로 감싸면 Component가 아예 Null로 되어지는 상황에서도 애니메이션을 구현가능  */}
                {/* <AnimatePresence>
                    {showing && (
                        <s.Box
                            variants={boxVariants}
                            initial="initail"
                            animate="visible"
                            exit="leaving"
                        />
                    )}
                </AnimatePresence> */}

                {/* exitBeforeEnter속성을 넣어주면, exit하는 element의 행동이 끝난후, 다음 element의 animate를 시작한다.
                (기본적으로는 exit과 다음 animate가 동시에 실행됨.) */}
                <AnimatePresence //
                    exitBeforeEnter
                    custom={isPrev}
                >
                    <s.Box
                        custom={isPrev}
                        key={visible}
                        variants={sliderVariants}
                        initial="invisible"
                        animate="visible"
                        exit="exit"
                    >
                        {visible}
                    </s.Box>
                </AnimatePresence>
                <button onClick={nextSlider}>next</button>
                <button onClick={prevSlider}>prev</button>
            </s.Wrapper>
        </>
    );
};

export default AnimatePre;
