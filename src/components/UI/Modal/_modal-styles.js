import styled, { css } from 'styled-components/macro';
import media from '../../Helpers/MediaQuery/MediaQuery';

export const Modal = styled.div`
    position: fixed;
    z-index: 500;
    background-color: ${props => props.theme.colorWhite};
    width: 100%;
    border: 1px solid ${props => props.theme.colorLightGrey1};
    box-shadow: 1px 1px 1px black;
    padding: 2rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    opacity: 1;
    transition: all 0.4s ease-out;
    overflow: hidden;
    color: #000;

    ${media(['min-345'], css`
        padding: 4rem;
        width: 90%;
    `)}

    ${media(['min-600'], css`
        padding: 4rem;
        width: 55rem;
    `)}

    ${({hide}) => hide && css`
        transition: all 0.4s ease-out;
        transform: translate(-50%, -200vh);
        opacity: 0;
    `};
`;