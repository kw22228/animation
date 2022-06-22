import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Box = styled(motion.div)`
    width: 300px;
    height: 200px;
    /* background-color: rgba(255, 255, 255, 0.1); */
    background-color: white;
    border-radius: 25px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5), 0 10px 20px rgba(0, 0, 0, 0.06);

    position: absolute;
    top: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    /* display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center; */
`;
