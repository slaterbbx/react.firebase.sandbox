import React from 'react';
import styled, { css } from 'styled-components/macro';
import media from '../../../Helpers/MediaQuery/MediaQuery';

const CheckBox = styled.div`
    display: inline-block;
    
    :not(:last-child) {
        margin-right: 1.5rem;

        ${media(['min-345'], css`
            margin-right: 2rem;
        `)}
    }

    label {
        font-family: ${({theme}) => theme.primaryFont};
        font-variant: small-caps;
        color: inherit;
        font-size: 1.4rem;
        display: flex;
        letter-spacing: .1rem;
        align-items: center;
        cursor: pointer;

        ${media(['min-345'], css`
            font-size: 1.8rem;
        `)}

        .conditional {
            margin-right: 1rem;

            ${media(['min-345'], `
                margin-right: 2rem;
            `)}
        }
    }

    .checkBox {
        position: absolute;
        opacity: 0;
    }
    
    .customCheckBox {
        position: relative;
        height: 2rem;
        width: 2rem;
        border: .2rem solid currentColor;
        display: inline-block;
        overflow: hidden;
        
        ::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -200%) rotate(45deg);
            border-bottom: .3rem solid currentColor;
            border-right: .3rem solid currentColor;
            height: 1.2rem;
            width: .7rem;
            transition: all .2s;
        }

        ${media(['min-345'], css`
            height: 2.5rem;
            width: 2.5rem;

            ::after {
                height: 1.5rem;
                width: 1rem;
                border-bottom: .4rem solid currentColor;
                border-right: .4rem solid currentColor;
            }
        `)}
    }

    .checkBox:checked ~ .customCheckBox::after {
        transform: translate(-50%, -60%) rotate(45deg);

        ${media(['min-345'], `
            transform: translate(-50%, -65%) rotate(45deg);
        `)}
    }

    .checkBox:focus ~ .customCheckBox {
        border: .3rem solid currentColor;
    }

`;

const checkbox = (props) => {

    const {label, radio, ...other} = props.other;

    let type = "checkbox";
    if (radio) {
        type = "radio";
    }

    let labelPlaceHolder = null
    if (label)  {
        labelPlaceHolder = <span className="conditional">{label}</span>
    }

    let inputElement = (
        <CheckBox>
            <label>
                {labelPlaceHolder}
                <input className="checkBox" type={type} {...other}/>
                <span className="customCheckBox"/>
            </label>
        </CheckBox>
    );

    return inputElement;
}

export default checkbox;
