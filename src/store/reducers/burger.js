import * as actionTypes from '../actions/actionTypes';

const initialState = {
        ingredients: {
            lettuce: 0,
            avocado: 0,
            cheese: 0,
            tofu: 0
        },
        price: {
            lettuce: 0.5,
            avocado: 0.5,
            cheese: 0.3,
            tofu: 0.8
        },
        totalPrice: 3.75
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
        return {
            ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.payload]: state.ingredients[action.payload] + 1
                }
        }
        case actionTypes.DEL_INGREDIENT:
        return {
            ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.payload]: state.ingredients[action.payload] - 1
                }
        }
        default: 
        return state;
    }
}

export default reducer;
