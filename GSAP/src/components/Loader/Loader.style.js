import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    touch-action: none;
    overflow: hidden;

    width: 100vw;
    height: 100vh;

    z-index: 6;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: black;
    color: ${props => props.theme.text};

    svg {
        width: 10vw;
        height: auto;
        overflow: visible;
        stroke-linejoin: round;
        stroke-linecap: round;

        g {
            path {
                stroke: ${props => props.theme.text};
            }
        }
    }
`;

export const Text = styled(motion.span)`
    font-size: ${props => props.theme.fontxl};
    color: ${props => props.theme.text};
    padding-top: 0.5rem;
`;
