import styled, { css } from 'styled-components/macro';

export const Wrapper = styled.div`
    display:flex;
    height: 100%;
    flex: 1;

    .innerWrapper {
        display: flex;
    }
    
    &:not(:last-child) {
        margin-bottom: ${({theme}) => theme.globalGutterTiny};;
    }
`;

export const Label = styled.div`
    align-self: center;
    font-size: 1.8rem;
    font-family: ${props => props.theme.primaryFont};
    font-weight: 700;
    text-transform: uppercase;
    text-align: right;
    line-height: .9;
    letter-spacing: 1px;
    color: ${props => props.theme.colorPrimaryAccent};
    
    margin-right: 1rem;
    min-width: 10rem;

    .count {
        font-size: 1.3rem;
        letter-spacing: 1px;
        font-weight: 300;
        margin-top: .3rem;
    }
`;

export const IconSmall = css`
    fill: currentColor;
    height: 1rem;
    width: 1rem;
`;

export const IconMed = css`
    fill: currentColor;
    height: 3.2rem;
    width: 3.2rem;
`;