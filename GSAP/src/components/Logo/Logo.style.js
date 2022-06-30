import styled from 'styled-components';
import { motion } from 'framer-motion';

export const LogoContainer = styled.div`
    position: absolute;
    top: 1rem;
    left: 1rem;

    width: 100%;

    z-index: 5;
    color: ${props => props.theme.text};

    svg {
        width: 4rem;
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

    a {
        display: flex;
        align-items: center;
    }
`;

export const Text = styled(motion.span)`
    font-size: ${props => props.theme.fontlg};
    color: ${props => props.theme.text};
    margin-top: 1.25rem;
`;
