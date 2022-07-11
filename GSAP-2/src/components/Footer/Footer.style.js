import styled from 'styled-components';
import { device } from '../../styles/variable';

export const Footer = styled.section`
    padding: 1.2rem calc(2.5rem + 2.5vw);
    font-size: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (${device.mobile}) {
        flex-direction: column;

        div {
            &:first-child {
                margin-bottom: 1rem;
            }
        }
    }
`;

export const LeftText = styled.div``;

export const RightText = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 1.5rem;
        height: auto;
        filter: invert(100%);
        margin-left: 1rem;
        transition: all 0.2s ease-in-out;
    }

    a {
        &:hover {
            img {
                transform: scale(1.5);
                filter: invert(50%) sepia(100%) saturate(300%) hue-rotate(216deg) brightness(100%)
                    contrast(97%);
            }
        }
    }
`;
