import styled, { css } from 'styled-components/macro';

export const Wrapper = styled.div`

    position: relative;

    .title {
        font-family: ${props => props.theme.primaryFont};
        font-size: 2.3rem;
        text-align: center;
        margin-bottom: 2.3rem;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-weight: 700;
    }

    .priceWrapper {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-bottom: 2rem;

        .price {
            font-size: 2.5rem;
            font-weight: 700;
        }
    }

    .details {
        display: flex;
        justify-content: space-between;
        font-family: ${props => props.theme.primaryFont};
        font-size: 1.5rem;
        font-weight: 700;
        padding-bottom: .5rem;
        border-bottom: 1px solid black;
        margin-bottom: 1rem;
        text-transform: uppercase;

        span {

        }
    }

    li {
        display: flex;
        justify-content: space-between;
        list-style: none;
        text-transform: capitalize;

        :last-child {
            margin-bottom: 2rem;
        }
    }
`;

export const coinIcon = css`
    width: 2.3rem;
    height: 2.3rem;
    margin-right: 1rem;
`;

export const cardsIcon = css`
    width: 4rem;
    height: 4rem;
    opacity: .15;

    :not(:last-child) {
        margin-right: 1rem;
    }
`;