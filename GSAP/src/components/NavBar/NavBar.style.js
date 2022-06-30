import styled from 'styled-components';
import { motion } from 'framer-motion';

export const NavContinaer = styled(motion.div)`
    position: absolute;
    top: ${props => (props.menuclick === 'true' ? '0' : `-${props.theme.navHeight}`)};
    width: 100vw;
    z-index: 6;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 0.3s ease;
`;

export const MenuBtn = styled.li`
    background-color: ${props => `rgba(${props.theme.textRgba}, 0.7)`};
    list-style-type: style none;
    color: ${props => props.theme.body};
    width: 15rem;
    height: 2.5rem;

    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%);

    display: flex;
    justify-content: center;
    align-items: center;

    clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);

    font-size: ${props => props.theme.fontmd};
    font-weight: 600;
    text-transform: uppercase;

    cursor: pointer;
`;

export const MenuItems = styled(motion.ul)`
    position: relative;
    height: ${props => props.theme.navHeight};
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    list-style: none;

    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    padding: 0 10rem;
`;

export const MenuItem = styled(motion.li)`
    text-transform: uppercase;
    color: ${props => props.theme.text};
`;
