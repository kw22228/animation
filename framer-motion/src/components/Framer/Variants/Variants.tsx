import * as s from '../Framer.style';

const variants = {
    start: { scale: 0 },
    end: { scale: 1, rotateZ: 360, transition: { type: 'spring', damping: 5 } },
};

const boxVariants = {
    start: {
        opacity: 0,
        scale: 0.5,
    },
    end: {
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            duration: 0.5,
            bounce: 0.5,
            delayChildren: 0.1,
            staggerChildren: 0.1,
        },
    },
};
const circleVariants = {
    start: {
        opacity: 0,
        y: 20,
    },
    end: {
        opacity: 1,
        y: 0,
    },
};
const Variants = () => {
    return (
        <>
            {/* <s.Box transition={{ duration: 3, delay: 3 }} animate={{ borderRadius: '100px' }} /> */}
            {/* <s.Box variants={variants} initial="start" animate="end" /> */}

            {/* initail과 animate가 부모에있으면 자동으로 자식들에게도 부착됨 */}
            <s.Box variants={boxVariants} initial="start" animate="end">
                <s.Circle variants={circleVariants} />
                <s.Circle variants={circleVariants} />
                <s.Circle variants={circleVariants} />
                <s.Circle variants={circleVariants} />
            </s.Box>
        </>
    );
};

export default Variants;
