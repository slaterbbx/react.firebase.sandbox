import React from 'react';
import * as Styles from './_orderSummary-style';
import Icon from '../../UI/Icons/Icons';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}><span>{igKey}:</span> {props.ingredients[igKey]}</li>;
        });

    return(
        <Styles.Wrapper>
            <div className="title">
                Your Order Details
            </div>
            <div className="details">
                <span>
                    Ingredient
                </span>
                qty
            </div>
            <ul>
                {ingredientSummary}
            </ul>
            <div className="priceWrapper">
                <Icon name="coin-dollar" styles={Styles.coinIcon} />
                <span className="price">
                    {props.totalPrice.toFixed(2)}
                </span>
            </div>
            <div className="u-global-alignRight u-global-marginBottom-small">
                <Icon name="visa" styles={Styles.cardsIcon} />
                <Icon name="american-express" styles={Styles.cardsIcon} />
                <Icon name="discover" styles={Styles.cardsIcon} />
                <Icon name="mastercard" styles={Styles.cardsIcon} />
            </div>
            <div className="u-global-alignRight">
                <Button onClick={props.orderContinue}>Checkout</Button>
                <Button onClick={props.ordering.bind(null, false)}>Cancel</Button>
            </div>
        </Styles.Wrapper>
    );

};

export default orderSummary; 