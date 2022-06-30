import styled from 'styled-components';

export const Section = styled.section`
    position: relative;
    min-height: 100vh;
    width: 80vw;
    overflow: hidden;

    display: flex;
    margin: 0 auto;
`;

export const Title = styled.h1`
    font-size: ${props => props.theme.fontBig};
    font-family: 'Kaushan Script';
    font-weight: 300;

    position: absolute;
    top: 1rem;
    left: 5%;
    z-index: 5;
`;

export const Left = styled.div`
    width: 50%;
    font-size: ${props => props.theme.fontlg};
    font-weight: 300;
    position: relative;
    z-index: 5;
    margin-top: 20%;
`;

export const Right = styled.div`
    width: 50%;
`;
