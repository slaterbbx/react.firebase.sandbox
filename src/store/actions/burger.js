import * as actionTypes from './actionTypes';

export const addIngredient = (payload) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        payload: payload
    }
}

export const delIngredient = (payload) => {
    return {
        type: actionTypes.DEL_INGREDIENT,
        payload: payload
    }
}