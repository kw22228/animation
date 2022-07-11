import styled from 'styled-components';
import { device } from '../../../styles/variable';

export const ServiceSection = styled.section`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20rem;
    position: relative;
    color: ${props => props.theme.white};
`;

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 85vh;
    z-index: -1;
    background-color: ${props => props.theme.black};
    background-repeat: no-repeat;
    background-size: auto 100vh;
`;

export const Title = styled.h1`
    display: inline-block;
    font-size: 2rem;
    margin-top: 1rem;
    position: relative;

    &::before {
        content: ' ';
        height: 1px;
        width: 50%;
        border-bottom: 2px solid ${props => props.theme.pink};

        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
    }
`;

export const Line = styled.span`
    border-left: 4px solid ${props => props.theme.background};
    height: 15rem;
    margin-top: 2rem;
    border-radius: 20px 20px 0 0;
`;

export const Triangle = styled.span`
    width: 0;
    height: 0;
    border-left: 1.2rem solid transparent;
    border-right: 1.2rem solid transparent;
    border-top: 2rem solid ${props => props.theme.background};
`;

export const Content = styled.div`
    display: flex;
    margin: 10rem 10rem;

    align-items: center;
    justify-content: space-between;

    position: relative;

    @media (${device.mobile}) {
        display: block;
        &:last-child {
            margin-bottom: 2rem;
        }
    }
`;

export const OBJ = styled.div`
    position: absolute;
    top: 80%;
    right: 35%;
    width: 20vw;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (${device.mobile}) {
        opacity: 0.5;
    }

    @media (${device.mobileSM}) {
        display: none;
    }
`;
