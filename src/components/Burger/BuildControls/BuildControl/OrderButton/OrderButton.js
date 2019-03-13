import React from 'react';
import Button from '../../../../UI/Button/Button';
import Icon from '../../../../UI/Icons/Icons';
import { css } from 'styled-components/macro';

const orderIcon = css`
    fill: currentColor;
    height: 2.5rem;
    width: 2.5rem;
    margin-right: 1rem;
`;

const orderButton = (props) => {

    const buttonContents = (
        <>
            <div className="content1">
                <div className="inner">
                    add ingredients
                </div>
            </div>
            <div className="content2">
                <div className="inner">
                    <Icon name="cart" styles={orderIcon}/>
                    order now
                </div>
            </div>
        </>
    );

    let boolSwap; // by default, true for 'add ingredients' false for 'order now'
    props.purchasable ? boolSwap = true : boolSwap = false;

    return (
        <Button buildControl light disabled={!boolSwap}
        animatedReplace1={boolSwap} // add ingredients
        animatedReplace2={!boolSwap} // order now
        // needed to stop "purchasing: true" when button should be inactive
        onClick={props.ordering.bind(null, boolSwap)}>
            {buttonContents}
        </Button>
    );
}

export default orderButton;