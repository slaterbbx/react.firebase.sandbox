import React, { Component } from 'react';
import styled, { css } from 'styled-components/macro';
import Icon from '../../Icons/Icons';

const inputShared = css`
    color: currentColor;
    border-bottom: .3rem solid currentColor;

    :focus{
        border-bottom: .3rem solid currentColor;
    }
`;

const colorCodeShared = css`
    ${({warn}) => warn && css`
        color: ${({theme}) => theme.colorWarning};
    `};
    ${({danger}) => danger && css`
        color: ${({theme}) => theme.colorDanger};
    `};
    ${({success}) => success && css`
        color: ${({theme}) => theme.colorSuccess};
    `};
`;

const InputWrapper = styled.div`
    position: relative;
    ${colorCodeShared}

    label {
        color: ${({theme}) => theme.colorPrimaryAccent};
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
            ${inputShared}
        `};
        ${({danger}) => danger && css`
            ${inputShared}
        `};
        ${({success}) => success && css`
            ${inputShared}
        `};
    }

    .showPass {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3rem;
        height: 3rem;
        bottom: .35rem;
        right: .3rem;
        cursor: pointer;
        user-select: none;

        svg {
            color: ${({theme}) => theme.colorTertiary};
            ${colorCodeShared}
            width: 2.5rem;
            height: 2.5rem;
            fill: currentColor;
        }
    }

    input:focus ~ .showPass > svg {
        color: ${({theme}) => theme.colorSecondaryAccent};
        ${colorCodeShared}
    }
`;

class input extends Component {

    state = {
        showPassword: false
    }

    typeHandler = () => {
        this.setState(state => ({
            showPassword: !state.showPassword
        }))
    }

    render(){

    const {label, warn, danger, success, ...other} = this.props.other;

    let inputElement = (
        <InputWrapper
        warn={warn}
        danger={danger}
        success={success}>
        <label>{label}</label>
        <input type={this.state.showPassword ? 'text' : 'password'} {...other}/>
        <div className="showPass" onClick={this.typeHandler}>
            {this.state.showPassword ? <Icon name="eye" /> : <Icon name="eye-blocked" />}
        </div>
        </InputWrapper>
    ) 
    
    return inputElement;
    }
}

export default input;