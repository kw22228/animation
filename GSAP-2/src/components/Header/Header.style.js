import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../styles/variable';

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5rem;
    background-color: ${props => props.theme.nav};
    color: ${props => props.theme.white};
    position: relative;
    z-index: 500;

    @media (${device.mobile}) {
        padding: 1rem 2rem;
    }
`;

export const Logo = styled(Link)`
    display: flex;
    align-items: center;
    width: 2rem;
    height: auto;
    cursor: pointer;

    img {
        width: 100%;
        height: auto;

        margin-right: 0.5rem;
    }
`;

export const Nav = styled.nav`
    width: 25rem;
    max-width: 40rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (${device.mobile}) {
        display: none;
    }

    a {
        font-weight: 600;
        color: ${props => props.theme.white};
        line-height: 1.5;

        &::after {
            content: '';
            display: block;
            height: 3px;
            width: 0;
            background-color: transparent;
            transition: width 0.5s ease;
        }

        &:not(:last-child):hover::after {
            width: 100%;
            background-color: ${props => props.theme.purple};
        }
    }
`;

export const Button = styled.button`
    background-color: ${props => props.theme.purple};
    padding: 0.5rem 1rem;
    border-radius: 20px;
    color: ${props => props.theme.white};
    cursor: pointer;
    font-weight: 600;

    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }

    &:active {
        transform: scale(0.9);
    }
`;

export const HamburgerBtn = styled.button`
    position: relative;
    background-color: ${props => (props.click ? 'transparent' : props.theme.white)};
    width: 1.5rem;
    height: 2px;
    cursor: pointer;
    transition: all 0.3s ease;

    display: none;

    @media (${device.mobile}) {
        display: block;
    }

    &::before,
    &::after {
        content: '';
        background-color: ${props => props.theme.white};
        width: 1.5rem;
        height: 2px;
        display: inline-block;

        position: absolute;
        left: 0;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    &::before {
        top: ${props => (props.click ? '0' : '-0.5rem')};
        transform: ${props => (props.click ? 'rotate(135deg)' : 'rotate(0deg)')};
    }
    &::after {
        top: ${props => (props.click ? '0' : '0.5rem')};
        transform: ${props => (props.click ? 'rotate(-135deg)' : 'rotate(0deg)')};
    }
`;

export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;

    background-color: rgba(53, 53, 63, 0.9);
    opacity: ${props => (props.click ? '1' : '0')};
    visibility: ${props => (props.click ? 'visible' : 'hidden')};
    border-radius: 20px;
    margin: 0.5rem;
    overflow-x: hidden;

    transition: all 0.3s ease;
    a {
        color: ${props => props.theme.white};
        font-weight: 600;
        font-size: 1.5rem;
        margin: 1.5rem;
        cursor: pointer;
    }
`;
