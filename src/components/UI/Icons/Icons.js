import React from "react";
import styled, { css } from 'styled-components/macro';

import Logo from './svgs/logo';

import CancelCircle from './svgs/cancel-circle'
import Cart from './svgs/cart';
import CoinDollar from './svgs/coin-dollar';
import Plus from './svgs/plus';
import Minus from './svgs/minus';
import StartEmpty from './svgs/star-empty';
import Cross from './svgs/cross';
import Users from './svgs/users';
import Eye from './svgs/eye';
import EyeBlocked from './svgs/eye-blocked';
import Spinner from './svgs/spinner';

import Visa from './svgs/visa';
import MasterCard from './svgs/mastercard';
import Discover from './svgs/discover';
import Amex from './svgs/amex';

import Confused from './svgs/confused';
import Bug from './svgs/bug';


const svgIcon = (props) => {
    let viewBox, PropsName, propsStyles;
    viewBox = '0 0 32 32';

    if (props.styles) {
        propsStyles = css`
            fill: currentColor;
            ${props.styles}
        `;
    } else if (!props.styles) {
        propsStyles = css`
            width: 2rem;
            height: 2rem;
            fill: currentColor;
        `;
    }

    const Icons = styled.svg`
        ${propsStyles}
    `;

    switch (props.name) {
        case "logo":
        PropsName = Logo;
        viewBox="0 0 154 32"
        break;
        case "cancel-circle":
        PropsName = CancelCircle;
        break;
        case "cart":
        PropsName = Cart;
        break;
        case "coin-dollar":
        PropsName = CoinDollar;
        break;
        case "plus":
        PropsName = Plus;
        break;
        case "minus":
        PropsName = Minus;
        break;
        case "star-empty":
        PropsName = StartEmpty;
        break;
        case "cross":
        PropsName = Cross;
        break;
        case "eye":
        PropsName = Eye;
        break;
        case "eye-blocked":
        PropsName = EyeBlocked;
        break;
        case "users":
        PropsName = Users;
        viewBox="0 0 36 32"
        break;
        case "spinner":
        PropsName = Spinner;
        break;
        // credit cards
        case "american-express":
        PropsName = Amex;
        viewBox="0 0 36 32"
        break;
        case "discover":
        PropsName = Discover;
        viewBox="0 0 36 32"
        break;
        case "mastercard":
        PropsName = MasterCard;
        viewBox="0 0 36 32"
        break;
        case "visa":
        PropsName = Visa;
        viewBox="0 0 36 32"
        break;
        // bugs / errors
        case "confused":
        PropsName = Confused;
        break;
        default:
        PropsName = Bug;
    }

    if (props.viewbox) {
        const propsInput = props.viewbox
        const checkVbCount = propsInput.split(' ').length;

        if (checkVbCount === 2) {
            const parseProps = propsInput.split(' ');
            const PropsConcat = [0, 0].concat(parseProps).join(' ')
            viewBox = PropsConcat;
        } else if (checkVbCount === 4) {
            viewBox = propsInput;
        }
    }

    return(
    <Icons viewBox={viewBox}>
        <PropsName />
    </Icons>
    )
};


export default React.memo(svgIcon);