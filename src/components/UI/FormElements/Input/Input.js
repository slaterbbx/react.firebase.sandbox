import React from 'react';
import styled, { css } from 'styled-components/macro';

const Wrapper = styled.div`

    label {
        display: block;
        margin-bottom: .4rem;
    }

    input {
        display: block;
        width: 100%;
        background-color: ${({theme}) => theme.colorPrimaryAccent};
        border: none;
        color: ${({theme}) => theme.colorTertiary};
        font-size: 2rem;
        font-family: ${({theme}) => theme.primaryFont};
        padding: .5rem 1rem;
        outline: none;
        border-bottom: .3rem solid ${({theme}) => theme.colorTertiary};

        ::placeholder {
            color: ${({theme}) => theme.colorTertiary};
        }

        :focus {
            border-bottom: .3rem solid ${({theme}) => theme.colorSecondaryAccent};
            :invalid {
                border-bottom: .3rem solid ${({theme}) => theme.colorWarning};
            }
            ::placeholder {
                color: ${({theme}) => theme.colorSecondaryAccent};
            }
        }

        ${({warn}) => warn && css`
            color: ${({theme}) => theme.colorWarning};
            border-bottom: .3rem solid ${({theme}) => theme.colorWarning};

            :focus{
                border-bottom: .3rem solid ${({theme}) => theme.colorWarning};
            }
        `};

        ${({danger}) => danger && css`
            color: ${({theme}) => theme.colorDanger};
            border-bottom: .3rem solid ${({theme}) => theme.colorDanger};

            :focus{
                border-bottom: .3rem solid ${({theme}) => theme.colorDanger};
            }
        `};

        ${({success}) => success && css`
            color: ${({theme}) => theme.colorSuccess};
            border-bottom: .3rem solid ${({theme}) => theme.colorSuccess};

            :focus{
                border-bottom: .3rem solid ${({theme}) => theme.colorSuccess};
            }
        `};
    }
`;

const input = (props) => {

    const {label, warn, danger, success, ...other} = props.other;
    let inputElement = (
        <Wrapper warn={warn} danger={danger} success={success}>
        <label>{label}</label>
        <input {...other}/>
        </Wrapper>
    ) 
    
    return inputElement;
}

export default input;