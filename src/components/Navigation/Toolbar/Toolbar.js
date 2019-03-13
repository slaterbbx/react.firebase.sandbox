import React from 'react';
import * as Styles from './_toolbar-styles';
import MenuButton from './Menu/MenuButton';
import MenuBackdrop from './Menu/MenuBackdrop/MenuBackdrop';
import Icon from '../../UI/Icons/Icons';

import { css } from 'styled-components/macro';

const logo = css`
    width: 15.4rem;
    height: 3.2rem;
    fill: ${({theme}) => theme.colorPrimaryAccent};
`;

const toolbar = (props) => (
    <>
    <Styles.ToolbarPlaceholder />
    <Styles.Toolbar>
        <Icon name="logo" styles={logo}/>
        <MenuButton menuClick={props.menuClick} menuActive={props.menuActive}/>
    </Styles.Toolbar>
    <MenuBackdrop menuActive={props.menuActive} menuClick={props.menuClick}/>
    </>
);


export default toolbar;