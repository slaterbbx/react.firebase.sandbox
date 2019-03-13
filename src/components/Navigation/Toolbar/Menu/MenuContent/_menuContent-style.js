import styled, { css } from 'styled-components/macro';

export const Wrapper = styled.nav`
    position: relative;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: 15;
    transition: transform 1s cubic-bezier(1,-0.22,.34,1.52), opacity 1s;
    color: ${({theme}) => theme.colorPrimaryAccent};

    ul {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        transform: translate(-50%, -50%);
        list-style: none;
        text-align: center;
        z-index: 17;

        backface-visibility: hidden;
    }

    li{
            a {
                color: ${({theme}) => theme.colorPrimaryAccent};
                cursor: pointer;
                font-family: ${({theme}) => theme.primaryFont};
                letter-spacing: .2rem;
                display: inline-block;
                font-size: 3rem;
                font-weight: 300;
                padding: 1rem 2rem;
                color: $color-white;
                text-decoration: none;
                text-transform: uppercase;
                background-image: linear-gradient(120deg, transparent 0%, transparent 50%, ${({theme}) => theme.colorPrimary} 50%);
                background-size: 230%;
                transition: all .4s;

            span {
                display: inline-block;
                font-size: 3.2rem;
                margin-right: 1.5rem;
            }
            
            :hover {
                background-position: 100%;
                color: ${({theme}) => theme.colorTertiary};
                transform: translateX(1rem); 
            }
        }
    }
`;

export const Logo = css`
    height: 20%;
    width: 80%;
    position: absolute;
    fill: currentColor;
    opacity: .1;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 16;
`;