import React from 'react';

import * as Styles from './_buildControl-style';
import Button from '../../../UI/Button/Button';
import Icon from '../../../UI/Icons/Icons';

const buildControl = (props) => {

    let isDisabled;
    props.disabled ? isDisabled = true : isDisabled = false;

    let buttonContent;
    if (props.disabled) {
        buttonContent = (
            <>
            <div><Icon name="cross" styles={Styles.IconSmall} /></div>
            N/A
            </>
        )
    } else {
        buttonContent = (
            <>
            <div><Icon name="minus" styles={Styles.IconSmall} /></div>
            Less
            </>
        )
    }

    return (
        <Styles.Wrapper>
            <Styles.Label>{props.label} <div className="count">Quantity: {props.count}</div></Styles.Label>

            <Button light buildControl
            onClick={props.less}
            disabled={isDisabled}>
            {buttonContent}
            </Button>

            <Button dark buildControl onClick={props.more}>
            <div><Icon name="plus" styles={Styles.IconSmall} /></div>
            More</Button>

        </Styles.Wrapper>
    );
};

export default buildControl;