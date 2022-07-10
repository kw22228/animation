import styled from 'styled-components';
import { device } from '../../styles/variable';

export const RightBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    position: relative;

    @media (${device.mobile}) {
        display: none;
    }
`;
