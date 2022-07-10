import styled, { keyframes } from 'styled-components';
import { device } from '../../styles/variable';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const MainSection = styled.section`
    width: 100vw;
    height: 45vw;
    background-color: ${props => props.theme.black};

    color: ${props => props.theme.white};

    display: flex;
    justify-content: center;

    position: relative;

    @media (${device.mobile}) {
        height: 70vw;
        display: block;
    }
`;

export const Blobs = styled.div`
    width: 100%;
    position: absolute;
    right: 0;

    @media (${device.mobile}) {
        opacity: 0.5;
    }
`;

export const PinkBlob = styled.div`
    width: calc(15% + 15vw);
    position: absolute;
    right: 0;
    top: calc(5rem + 5vw);
    z-index: 6;
`;
export const WhiteBlob = styled.div`
    width: calc(20% + 20vw);
    position: absolute;
    right: calc(3.5rem + 3.5vw);
    top: calc(2rem + 2vw);
    z-index: 5;
`;
export const PurpleBlob = styled.div`
    width: calc(10% + 10vw);
    position: absolute;
    right: 0;
`;

export const MainContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70vw;

    @media (${device.mobile}) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
    }
`;

export const LeftBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    line-height: 1.5;

    @media (${device.mobile}) {
        width: 80%;
        text-align: center;
        align-items: center;
        justify-content: space-around;
        margin-top: calc(2.5rem + 2.5vw);
        filter: drop-shadow(2px 4px 6px ${props => props.theme.black});
    }
`;

export const Topic = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.nav};
    font-weight: 700;
    font-size: calc(0.4rem + 0.4vw);
    padding: 0.5rem 1rem;
    border-radius: 20px;
`;

export const Circle = styled.span`
    display: block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${props => props.theme.purple};
    margin-right: 0.5rem;
`;

export const Title = styled.h1`
    font-size: calc(2rem + 1vw);
    line-height: 1.2;
    padding: 0.5rem 0;
`;

export const SubText = styled.h5`
    font-size: calc(0.5rem + 0.5vw);
    color: ${props => props.theme.nav2};
`;

export const CTA = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem 1rem;
    margin-top: 1rem;
    border-radius: 20px;
    cursor: pointer;
    font-size: calc(0.5rem + 0.5vw);
    font-weight: 700;

    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
    &:active {
        transform: scale(0.9);
    }

    img {
        width: 1.5rem;
    }
`;
const move = keyframes`
    0%{ transform: translateY(-5px); }
    50%{ transform: translateY(10px); }
    100%{ transform: translateY(-5px); }
`;

export const MobileSvg = styled.img`
    max-width: 100%;
    width: calc(30% + 20vw);
    z-index: 7;
    height: auto;

    animation: ${move} 1.5s ease infinite;

    @media (${device.mobile}) {
        align-self: flex-start;
        position: absolute;
        bottom: 5px;
        opacity: 0.5;
    }
    @media (${device.mobileSM}) {
        display: none;
    }
`;
