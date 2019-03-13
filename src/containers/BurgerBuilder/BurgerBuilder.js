import React, { Component } from 'react';
import { connect } from 'react-redux';

import Burger from '../../components/Burger/BurgerView/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import * as Styles from './_burgerBuilder-style';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

import * as action from '../../store/actions';

class BurgerBuilder extends Component {
    state = {
        purchasable: false,
        ordering: false,
    }

    // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#when-to-use-derived-state
    // GOOD TO KNOW, PROBABLY WILL MOVE THIS INTO GLOBAL STATE SO GET RID OF IT THEN!!!!!!!
    static getDerivedStateFromProps(nextProps, prevState) {
        const sum = Object.keys(nextProps.ingredients).map((el) => {
            return nextProps.ingredients[el];
        }).reduce((sum, el) => sum + el, 0);

        let newState = {...prevState};
        newState.purchasable = sum > 0;

        return newState;
      }
       

    orderNowHandler = () => {
        this.setState(prevState => {
            return {
                ordering: !prevState.ordering
            }});
    }

    orderContinueHandler = () => {
        alert('You continue!');
    }

    render() {
        const disabledInfo = {
            ...this.props.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <=0
        } 

        return (
            <>
            <Modal
            deactive={this.orderNowHandler}
            show={this.state.ordering}>
                <OrderSummary
                ingredients={this.props.ingredients}
                totalPrice={this.props.totalPrice}
                ordering={this.orderNowHandler} 
                orderContinue={this.orderContinueHandler} />
            </Modal>

            <Styles.IngredientsWrapper>
                <Burger ingredients={this.props.ingredients}/>
            </Styles.IngredientsWrapper>

            <BuildControls 
            ingredientAdded={this.props.onAddIngredient}
            ingredientRemoved={this.props.onDelIngredient}
            ingredients={this.props.ingredients}
            disabled={disabledInfo}
            purchasable={this.state.purchasable}
            ordering={this.orderNowHandler}
            price={this.props.totalPrice} />
            </>

        );
    }
}

const mapStateToProps = state => {
   return {
       ingredients: state.burger.ingredients,
       totalPrice: state.burger.totalPrice
   }
};

const mapDispatchToProps = dispatch => {
    return {
        onAddIngredient: (ingType) => dispatch(action.addIngredient(ingType)),
        onDelIngredient: (ingType) => dispatch(action.delIngredient(ingType))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);