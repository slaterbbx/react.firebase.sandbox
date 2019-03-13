import * as actionTypes from '../actions/actionTypes';

const innitialState = {
    authLoading: true,
    authenticated: false,
    authFail: {
        isFail: false,
        errorCode: '',
        errorMessage: ''
    },
    password: {
        current: '',
        validity: false,
        errorMessage: ''
    },
    email: {
        current: '',
        validity: false,
        errorMessage: ''
    }
}

const reducer = (state = innitialState, action) => {

    switch(action.type) {
        case actionTypes.AUTH_FAIL: 
        return {
            ...state,
            authLoading: false,
            authFail: {
                ...state.authFail,
                isFail: action.isFail,
                errorCode: action.errorCode,
                errorMessage: action.errorMessage
            }
        }
        case actionTypes.AUTH_LOADING: 
        return {
            ...state,
            authLoading: true
        }
        case actionTypes.AUTH_CHANGE: 
        return {
            ...state,
            authenticated: action.payload,
            authLoading: false
        }
        case actionTypes.AUTH_VALIDATION: 
        return {
            ...state,
            [action.validityType]: {
                ...state[action.validityType],
                current: action.current,
                validity: action.validity,
                // errorMessage: action.error,
            }
        }
        case actionTypes.AUTH_CLEAR: 
        return {
            ...state,
            password: {
                ...state.password,
                current: ''
            },
            email: {
                ...state.email,
                current: ''
            }
        }
        default:
        return state
    }

}

export default reducer

