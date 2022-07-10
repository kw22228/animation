import styled, { keyframes } from 'styled-components';
import { device } from '../../../styles/variable';

export const AboutSection = styled.section`
    width: 100vw;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Waves = styled.img`
    width: 100%;
    position: absolute;
    top: -1rem;
`;

export const Hand = styled.div`
    position: absolute;
    bottom: -1rem;
    right: 0;

    @media (${device.mobileSM}) {
        display: none;
    }
`;

export const Main = styled.div`
    margin: 0 15rem;
    margin-top: 15rem;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media (${device.tablet}) {
        margin: 3rem calc(5rem + 5vw);
        margin-top: 10rem;
    }
    @media (${device.mobileSM}) {
        align-items: center;
        margin: 3rem calc(3rem+ 3vw);
    }
`;

export const Title = styled.h1`
    display: inline-block;
    font-size: 2rem;
`;

export const CurvedLine = styled.div`
    width: 7rem;
    height: 2rem;
    border: 5px solid ${props => props.theme.purple};
    border-color: ${props => props.theme.purple} transparent transparent transparent;
    border-radius: 150%/60px 70px 0 0;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (${device.mobileSM}) {
        flex-direction: column;
    }
`;

const move = keyframes`
    0%{transform:translateY(-5px)}
    50%{transform:translateY(10px) translateX(10px)}
    100%{transform:translateY(-5px)}
`;

export const Rocket = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    padding-bottom: 5rem;

    animation: ${move} 1.5s ease infinite;

    @media (${device.mobileSM}) {
        width: 50vw;
        padding-bottom: 0;
    }
`;

export const AboutText = styled.div`
    position: relative;
    width: 50%;

    @media (${device.mobileSM}) {
        width: 100%;
    }
`;

export const Human = styled.div`
    width: 50%;
    position: absolute;
    right: 0;
    bottom: 100%;

    @media (${device.mobileSM}) {
        display: none;
    }
`;

export const Text = styled.h4`
    font-size: calc(0.5rem + 1vw);
    line-height: 1.5;
    color: ${props => props.theme.nav2};
`;

export const Circle = styled.span`
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${props => props.bgColor};
    margin: 1rem 0.5rem 0 0;
`;
