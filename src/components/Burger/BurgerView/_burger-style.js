import styled, { css } from 'styled-components/macro';


export const Wrapper = styled.div`
    overflow-y: auto;
    height: 25rem;
    font-size: 1.8rem;
    margin: 0 1rem;

        .sudoTable {
            display: table;
            width: 100%;
            height: 100%;
        }

        .sudoTableCell {
            vertical-align: middle;
            display: table-cell;
        }

        .noIngredients {
            display: flex;
            justify-content: center;
            align-items: center;
            text-transform: uppercase;
            font-weight: 700;
            color: ${props => props.theme.colorTertiary};
            font-size: 1.3rem;
            letter-spacing: 1px;
        }

        ::-webkit-scrollbar {
            width: 20px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            background: ${({theme}) => theme.colorWhite};
        }
        
        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: ${({theme}) => theme.colorPrimary};  
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: ${({theme}) => theme.colorSecondaryAccent}; 
        }
`;

export const noIngIcon = css`
    margin-right: 1rem;
    fill: currentColor;
    width: 1rem;
    height: 1rem;
`;

