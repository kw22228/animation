import styled from 'styled-components';

export const ContactSection = styled.section`
    width: 100vw;
    padding: calc(2.5rem + 2.5vw) 0;
    background-color: ${props => props.theme.black};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
    display: inline-block;
    font-size: calc(1rem + 1.5vw);
    margin-top: 1rem;
    margin-bottom: 3rem;
    position: relative;
    color: ${props => props.theme.white};

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

export const Icons = styled.div`
    display: inline;
    margin-bottom: 3rem;

    a {
        &:not(:last-child) {
            margin-right: 2rem;
        }

        &:hover {
            img {
                filter: invert(20%) sepia(100%) saturate(300%) hue-rotate(580deg);
            }
        }
    }

    img {
        width: 3rem;
        height: 3rem;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;

    input {
        padding: 1rem calc(0.5rem + 1vw);
        margin-bottom: 1rem;
        background-color: ${props => props.theme.nav2};
        border: none;
        border-radius: 4px;
        color: #eff7f8;

        &:active,
        &:focus {
            border: none;
            outline: none;
            background-color: ${props => props.theme.nav};
        }

        &::placeholder {
            color: #eff7f8;
            opacity: 0.8;
        }
        &[name='name'] {
            margin-right: 2rem;
        }
    }

    textarea {
        padding: 1rem calc(0.5rem + 1vw);
        margin-bottom: 1rem;
        background-color: ${props => props.theme.nav2};
        border: none;
        border-radius: 4px;
        color: #eff7f8;

        &:active,
        &:focus {
            border: none;
            outline: none;
            background-color: ${props => props.theme.nav};
        }

        &::placeholder {
            color: #eff7f8;
            opacity: 0.8;
        }
    }

    button {
        padding: 0.8rem 2rem;
        background-color: ${props => props.theme.white};
        border-radius: 20px;
        font-size: 1.2rem;
        font-weight: 600;
        cursor: pointer;

        transition: all 0.3s ease;

        &:hover {
            transform: scale(1.1);
        }
        &:active {
            transform: scale(0.9);
        }
    }

    & > div {
        margin: 0 auto;
    }
`;

export const Row = styled.div``;
