import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BigBox = styled.div`
    width: 600px;
    height: 600px;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* overflow: hidden; */
`;

export const Box = styled(motion.div)`
    width: 100px;
    height: 100px;
    /* background-color: rgba(255, 255, 255, 0.1); */
    background-color: white;
    border-radius: 25px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5), 0 10px 20px rgba(0, 0, 0, 0.06);
    /* display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center; */
`;

export const Circle = styled(motion.div)`
    background-color: white;
    width: 30px;
    height: 30px;
    border-radius: 35px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export const Svg = styled.svg`
    width: 300px;
    height: 300px;

    path {
        stroke: white; //테두리
        stroke-width: 2; //테두리 굵기
    }
`;
