import * as s from './Framer.style';

const variants = {
    start: { scale: 0 },
    end: { scale: 1, rotateZ: 360, transition: { type: 'spring', damping: 5 } },
};

const Framer = () => {
    return (
        <s.Wrapper>
            {/* <s.Box transition={{ duration: 3, delay: 3 }} animate={{ borderRadius: '100px' }} /> */}
            {/* <s.Box variants={variants} initial="start" animate="end" /> */}
            <s.Box>
                <s.Circle />
                <s.Circle />
                <s.Circle />
                <s.Circle />
            </s.Box>
        </s.Wrapper>
    );
};

export default Framer;
