import * as s from '../Framer.style';

const boxVariants = {
    hover: {
        scale: 1.5,
        rotateZ: 90,
    },
    click: {
        scale: 1,
        borderRadius: '100px',
    },
};
const Gestures = () => {
    return (
        // drag는 기본적으로 true이다, drag="x"는 x축으로만 드래그 y는 y축으로만 드래그
        <s.Box variants={boxVariants} whileHover="hover" whileTap="click" />
    );
};

export default Gestures;
