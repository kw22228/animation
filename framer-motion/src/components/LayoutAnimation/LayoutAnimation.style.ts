import styled from 'styled-components';
import { motion } from 'framer-motion';
export const Wrapper = styled(motion.div)`
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Box = styled(motion.div)`
    height: 200px;
    /* background-color: rgba(255, 255, 255, 0.1); */
    background-color: white;
    border-radius: 25px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5), 0 10px 20px rgba(0, 0, 0, 0.06);

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 20px;
    font-weight: bold;
    /* display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center; */
`;

export const BoxChild = styled(motion.div)`
    background-color: #00a5ff;
    height: 50px;
    width: 50px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export const CircleChild = styled(BoxChild)`
    border-radius: 25px;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 50vw;
    gap: 15px;

    div:first-child,
    div:last-child {
        grid-column: span 2;
    }
`;

export const Overlay = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;
`;
