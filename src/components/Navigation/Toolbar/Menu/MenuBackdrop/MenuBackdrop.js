import React from 'react';
import styled, { css } from 'styled-components';
import MenuContent from '../MenuContent/MenuContent';

const Backdrop = styled.div`
    position: fixed;
    height: 100vh;
    width: 100%;
    top: 0;
    right: 0;
    background-image: linear-gradient(to bottom right, ${({theme}) => theme.colorSecondary}, ${({theme}) => theme.colorPrimary});
    z-index: 10;
    transition: transform .9s cubic-bezier(0.645, 0.045, 0.355, 1);
    transform: translateY(-100vh);

    ${({show}) => show && css`
        transform: translateY(0);
    `};
`;


const menuBackdrop = (props) => {

    return(
        <Backdrop show={props.menuActive}><MenuContent menuClick={props.menuClick}/></Backdrop>
    );

}

export default menuBackdrop;