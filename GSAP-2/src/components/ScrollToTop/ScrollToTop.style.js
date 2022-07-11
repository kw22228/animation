import styled from 'styled-components';

export const Up = styled.div`
    position: fixed;
    right: 3rem;
    bottom: 3rem;

    cursor: pointer;
    z-index: 999;
    img {
        width: 3rem;
        height: auto;
        background-color: ${props => props.theme.white};
        border: 2px solid ${props => props.theme.white};
        border-radius: 50%;

        transition: all 0.2s ease;
        &:hover {
            transform: scale(1.2);
        }

        &:active {
            transform: scale(0.9);
        }
    }
`;
