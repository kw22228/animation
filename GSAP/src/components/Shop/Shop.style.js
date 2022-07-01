import styled from 'styled-components';

export const Section = styled.section`
    min-height: 100vh;
    height: auto;
    width: 100vw;
    margin: 0 auto;
    overflow: hidden;
    overflow-x: hidden;
    position: relative;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const Title = styled.h1`
    font-size: ${props => props.theme.fontxxxl};
    font-family: 'Kaushan Script';
    font-weight: 300;
    text-shadow: 1px 1px 1px ${props => props.theme.body};
    color: ${props => props.theme.text};

    position: absolute;
    top: 1rem;
    left: 5%;
    z-index: 11;
`;

export const Left = styled.div`
    width: 35%;
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    min-height: 100vh;
    z-index: 5;

    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-size: ${props => props.theme.fontlg};
        font-weight: 300;
        width: 80%;
        margin: 0 auto;
    }
`;

export const Right = styled.div`
    position: absolute;
    left: 35%;
    min-height: 100vh;
    padding-left: 30%;

    background-color: ${props => props.theme.grey};
    /* width: 65%; */
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h1 {
        width: 5rem;
        margin: 0 2rem;
    }
`;
