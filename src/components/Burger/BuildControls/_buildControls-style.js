import styled, { css } from 'styled-components/macro';

export const Wrapper = styled.div`
    display: flex;
    /* flex: 1; */
    justify-content: center;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom right, ${props => props.theme.colorPrimary}, ${props => props.theme.colorSecondary} );

    .price {
        margin-bottom: 1rem;
        font-size: 2.5rem;
        letter-spacing: 2px;
        color: ${props => props.theme.colorPrimaryAccent};
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-weight: 700;
    }

    .innerWrapper {
        display: flex;
        flex-direction: column;
        padding: 2rem;
        width: 100%;
        height: 100%;
    }
`;

export const dollarIcon = css`
    fill: currentColor;
    height: 2.3rem;
    width: 2.3rem; 
    margin: 0 .5rem 0 3rem;
`;