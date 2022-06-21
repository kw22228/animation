import { useRef } from 'react';
import * as s from '../Framer.style';

const boxVariants = {
    hover: {
        rotateZ: 90,
    },
    click: {
        scale: 1,
        borderRadius: '100px',
    },
    drag: {
        backgroundColor: 'rgb(46, 204, 113)',
        transition: {
            duration: 10,
        },
    },
};
const Dragging = () => {
    const bigBoxRef = useRef<HTMLDivElement>(null);
    return (
        // drag는 기본적으로 true이다, drag="x"는 x축으로만 드래그 y는 y축으로만 드래그
        // dragConstraints는 해당motion이 drag가능한 곳을 제안한다. ( (BigBox크기 / 2) - (Box크기 / 2) )
        // dragSnapToOrigin true는 드래그후 다시 제자리로 돌아온다.
        // dragElastic= 0 ~ 1  :  내 드래그의 힘이 생김 숫자가 높을수록 더 쌤.(default 0.5)
        <s.BigBox ref={bigBoxRef}>
            <s.Box
                drag
                // dragConstraints={{ top: -250, bottom: 250, left: -250, right: 250 }}
                dragConstraints={bigBoxRef}
                dragSnapToOrigin
                dragElastic={1}
                variants={boxVariants}
                whileHover="hover"
                whileTap="click"
                whileDrag="drag"
            />
        </s.BigBox>
    );
};

export default Dragging;
