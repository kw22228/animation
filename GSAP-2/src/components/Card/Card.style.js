import styled from 'styled-components';

export const Card = styled.div`
    background-color: ${props => props.theme.nav2};
    color: ${props => props.theme.white};
    height: calc(8rem + 12vw);
    width: calc(9rem + 12vw);
    border-radius: 20px;
    margin-top: calc(5rem + 5vw);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;
`;

export const Image = styled.div`
    width: 40%;
    height: 40%;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;

    position: absolute;
    left: 50%;
    bottom: 80%;
    transform: translateX(-50%);

    border-radius: 50%;

    filter: drop-shadow(0x -3px 3px ${props => props.theme.nav2});
`;

export const Text = styled.h4`
    padding: 0 calc(1rem + 1vw);
    padding-top: 2rem;
    font-size: calc(0.6rem + 0.5vw);
    text-align: center;
`;

export const Name = styled.h3`
    color: ${props => props.theme.pink};
    padding-top: 0.5rem;
    font-size: calc(0.5rem + 1vw);
`;
