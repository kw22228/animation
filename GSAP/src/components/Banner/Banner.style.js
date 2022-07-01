import styled from 'styled-components';

export const Section = styled.section`
    min-height: 100vh;
    width: 80vw;
    margin: 0 auto;
    position: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
`;

export const Container = styled.div`
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

export const Banner = styled.h1`
    font-size: ${props => props.theme.fontxxxl};
    font-family: 'Kaushan Script';
    color: ${props => props.theme.text};
    white-space: nowrap;
    text-transform: uppercase;
    line-height: 1;

    span {
        display: block;
        background-color: ${props => props.theme.body};
        padding: 1rem 2rem;
    }
`;
