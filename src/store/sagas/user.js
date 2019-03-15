import { put } from 'redux-saga/effects';
import * as firebase from '../../fireConfig';
import * as userAction from '../actions/user';

export function* authSaga(action) {
    yield put(userAction.authLoading());
    if (action.loginType === 'login') {
        try {
            const authRes = yield firebase.auth.signInWithEmailAndPassword(action.email, action.password)
            console.log('login resulted in', authRes);
        } catch (error) {
            const code = error.code;
            const message = error.message;
            console.log(code, message);
    
            yield put(userAction.authFail(true, code, message));
        }

    } else if (action.loginType === 'create') {
        try {
            const authRes = yield firebase.auth.createUserWithEmailAndPassword(action.email, action.password)
            console.log('create resulted in', authRes);
        } catch (error) {
            const code = error.code;
            const message = error.message;
            console.log(code, message);
    
            yield put(userAction.authFail(true, code, message));
        }
    } 
}






// export const auth = (type, email, password) => {
//     return dispatch => {
//             dispatch(authLoading());
//             if (type === 'login') {
//                 firebase.auth.signInWithEmailAndPassword(email, password)
//                 .then( result => {
//                     console.log('login resulted in', result);
//                     // dispatch(authChange(true));
//                 })
//                 .catch(error => {
//                     const code = error.code;
//                     const message = error.message;
//                     console.log(code, message);
//                     dispatch(authFail(true, code, message));

//                 });

//             } else if (type === 'create') {
//                 firebase.auth.createUserWithEmailAndPassword(email, password)
//                 .then( result => {
//                     console.log('login resulted in', result);
//                     // dispatch(authChange(true));
//                 })
//                 .catch(error => {
//                     const code = error.code;
//                     const message = error.message;
//                     console.log(code, message);
//                     dispatch(authFail(true, code, message));
//                 });
//             }
//     }
// }