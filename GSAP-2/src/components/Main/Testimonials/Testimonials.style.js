import styled from 'styled-components';
import { device } from '../../../styles/variable';

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 5rem 0;
`;

export const Title = styled.h1`
    display: inline-block;
    font-size: calc(1rem + 1.5vw);
    margin-top: 1rem;
    position: relative;

    &::before {
        content: ' ';
        height: 1px;
        width: 60%;
        border-bottom: 2px solid ${props => props.theme.purple};

        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
    }
`;

export const Carousel = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (${device.mobile}) {
        width: 90vw;
    }

    .slick-slider .slick-arrow:before {
        color: ${props => props.theme.black};
        font-size: 1.5rem;

        @media (${device.mobile}) {
            display: none;
        }
    }

    .slick-slider .slick-dots button:before {
        color: ${props => props.theme.black};
        font-size: 1.5rem;
    }
    .slick-slide.slick-active {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0;
        padding: 0;
        margin-bottom: 3rem;
    }
`;
