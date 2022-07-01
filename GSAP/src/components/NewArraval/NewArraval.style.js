import styled from 'styled-components';

export const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
`;

export const Overlay = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30vw;
    height: 90vh;

    box-shadow: 0 0 0 4vw ${props => props.theme.text};
    border: 3px solid ${props => props.theme.body};
    z-index: 11;
`;

export const Container = styled.div`
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 25vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: ${props => props.theme.fontxxxl};
    font-family: 'Kaushan Script';
    font-weight: 300;
    text-shadow: 1px 1px 1px ${props => props.theme.text};
    color: ${props => props.theme.body};

    position: absolute;
    top: 1rem;
    left: 5%;
    z-index: 11;
`;

export const Text = styled.div`
    width: 20%;
    font-size: ${props => props.theme.fontlg};
    font-weight: 300;
    padding: 2rem;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 11;
`;
