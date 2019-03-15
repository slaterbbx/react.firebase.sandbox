import * as actionTypes from './actionTypes';

export const authChange = (payload) => {
    return {
        type: actionTypes.AUTH_CHANGE,
        payload: payload
    }
}

export const authFail = (isFail, code, message) => {
    return {
        type: actionTypes.AUTH_FAIL,
        isFail: isFail,
        errorCode: code,
        errorMessage: message
    }
}

export const authLoading = (payload) => {
    return {
        type: actionTypes.AUTH_LOADING,
        payload: payload
    }
}

export const authValidation = (type, current, validity) => {
    return {
        type: actionTypes.AUTH_VALIDATION,
        validityType: type,
        current: current,
        validity: validity, 
        // errorMessage: error
    }
}

export const authClear = () => {
    return {
        type: actionTypes.AUTH_CLEAR,
    }
}

// SAGAS
export const auth = (type, email, password) => {
    return {
        type: actionTypes.AUTH_USER, // FOR SAGA WATCHER
        loginType: type,
        email: email,
        password: password,
    }
}