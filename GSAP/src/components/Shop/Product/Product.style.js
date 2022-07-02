import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Item = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20rem;
    margin-right: 6rem;

    img {
        width: 100%;
        height: auto;
        cursor: pointer;
    }

    h1 {
        display: inline-block;
        width: fit-content;
        font-weight: 500;
        text-align: center;
        cursor: pointer;
    }

    @media (max-width: 48em) {
        width: 15rem;
    }
`;
