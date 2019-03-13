import styled, { css } from 'styled-components/macro';

// repeated code
const animatedReplace1n2 = css`
    position: relative;

    .content1,
    .content2 {
        position: absolute;
        left: 50%;
        width: 100%;
        transform: translate(-50%, -50%);
        transition: all .2s;

        .inner {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .content2 {color: ${({theme}) => theme.colorPrimaryAccent};}
    .content1 {color: ${({theme}) => theme.colorTertiary};}
`;

export const button = styled.button`
    display: inline-block;
    font: inherit;
    padding: .7rem 2rem;
    cursor: pointer;
    outline: none;
    color: ${({theme}) => theme.colorWhite};
    font-size: 1.4rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    overflow: hidden;
    border: 1px solid ${({theme}) => theme.colorLightGrey1};
    background-color: ${({theme}) => theme.colorLightGrey2};

    transition: all .2s;

    ${({fullWidth}) => fullWidth && css`
        width: 100%;
    `};

    ${({light}) => light && css`
        background-color: ${({theme}) => theme.colorSecondary};
        border: 1px solid ${({theme}) => theme.colorTertiary};
    `};

    ${({dark}) => dark && css`
        background-color: ${({theme}) => theme.colorTertiary};
        border: 1px solid ${({theme}) => theme.colorTertiary};
    `};

    ${({buildControl}) => buildControl && css`
        flex:1;
        letter-spacing: 1px;
        min-height: 6rem;
        font-weight: 700;
        padding: .7rem 0;
        font-size: 1.6rem;
        color: ${({theme}) => theme.colorPrimaryAccent};
    `};

    ${({animatedReplace1}) => animatedReplace1 && css`

        ${animatedReplace1n2}
        .content1 {top: 150%;}
        .content2 {top: 50%;}

        :hover .content2 > .inner {
            color: ${({theme}) => theme.colorTertiary};
        }
    `};

    ${({animatedReplace2}) => animatedReplace2 && css`

        ${animatedReplace1n2}
        .content1 {top: 50%;}
        .content2 {top: -50%;}
    `};

    :focus {
        box-shadow: 0 .2rem 1rem rgba(0, 0, 0, 0.2);
    }

    :hover,
    :active {
        box-shadow: 0 .2rem 1rem rgba(0, 0, 0, 0.2);
        background-color: ${({theme}) => theme.colorMedGrey1};
        ${({light}) => light && css`
            color: ${({theme}) => theme.colorSecondary};
            background-color: ${({theme}) => theme.colorSecondaryAccent};
        `};
        ${({dark}) => dark && css`
            color: ${({theme}) => theme.colorTertiary};
            background-color: ${({theme}) => theme.colorTertiaryAccent};
        `};
    }

    :not(:last-child) {
        margin-right: ${({theme}) => theme.globalGutterTiny};
    }

    :disabled {
        color: ${({theme}) => theme.colorTertiary};
        background-color: ${({theme}) => theme.colorSecondary};

        :hover {
            cursor: not-allowed;
            box-shadow: none;
        }
    }
`;

export default button;