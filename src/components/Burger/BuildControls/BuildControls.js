import React from 'react';

import * as Styles from './_buildControls-style';
import BuildControl from './BuildControl/BuildControl';
import OrderButton from './BuildControl/OrderButton/OrderButton';
import Icon from '../../UI/Icons/Icons';

const buildControls = (props) => {

    const controls = Object.keys(props.ingredients);

    return (
    <Styles.Wrapper>
        <div className="innerWrapper">
            <p className="price">
                <Icon name="coin-dollar" styles={Styles.dollarIcon}/>
                {props.price.toFixed(2)}
            </p>

            {controls.map(ctrl => (
                <BuildControl 
                more={props.ingredientAdded.bind(null, ctrl)}
                less={props.ingredientRemoved.bind(null, ctrl)}
                key={ctrl} 
                label={ctrl}
                count={props.ingredients[ctrl]}
                disabled={props.disabled[ctrl]} />
            ))}

            <OrderButton
            purchasable={props.purchasable}
            ordering={props.ordering}/>
        </div>
    </Styles.Wrapper>
    );
};

export default buildControls;