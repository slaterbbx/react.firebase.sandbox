import React, { useState } from 'react';
import { connect } from 'react-redux';
import PasswordValidator from '../Validators/PasswordValidator/PasswordValidator';
import * as firebase from '../../../fireConfig';

import * as action from '../../../store/actions'

import EmailValidator from '../Validators/EmailValidator/EmailValidator';
import Modal from '../../UI/Modal/Modal';

const userAccount = props => {

	const [ needReLogin, setNeedReLogin ] = useState(false);

	const user = firebase.auth.currentUser;

    const signOutHandler = () => {
        firebase.auth.signOut().then(() => {
            // Sign-out successful.
          }).catch(error => {
            // An error happened.
          });
	}
	
	const deleteUserHandler = () => {

		// ADD A "ARE YOU SURE YOU WANT TO DELETE YOUR ACCOUNT!?"

		user.delete().then(function() {
			// User deleted.
		}).catch(function(error) {
			props.onFail(true, error.code, error.message)

			// ADD SAME FUNCTIONALITY HERE AS IN EMAIL HANDLER FOR RE-VALIDATION
			// MAKE HELPER FUNCTION TO CLEAN SOME OF THIS UP.
		});
	}

    const updateEmailHandler = () => {
		if (props.authEmail.validity) {	
			user.updateEmail(props.authEmail.current).then(() => {
				// Update successful.
			}).catch(function(error) {
				if (error.code === 'auth/requires-recent-login') {
					// Only shows when re-login is required due to time to reset email address
					setNeedReLogin(true);
					props.onFail(true, error.code, error.message)

				} else if ( error.code !== 'auth/requires-recent-login' ) {
					setNeedReLogin(false);
					props.onFail(true, error.code, error.message)
				}
			});
		} else {
			setNeedReLogin(false);
			props.onFail(true, 'invalid email', 'please use a valid email address')
		}
	}
	
	const reAuthenticateHandler = () => {
		// EmailAuthProvider is from firebase/app ( poor documentation on this )
		const credential = firebase.fb.auth.EmailAuthProvider.credential(user.email, props.authPassword);
		user.reauthenticateAndRetrieveDataWithCredential(credential).then(function() {
		// User re-authenticated.
		}).catch(function(error) {
		// An error happened.
		console.log(error);
		});
		setNeedReLogin(false);
	}

    let email, uid;
    if (user != null) {
      email = user.email;
      uid = user.uid; 
	}

	console.log(needReLogin)

	let markup;
	if ( needReLogin === true ) {
		// if re-login is needed, we show the passwordValidator
		markup = (
			<Modal show={props.authFail.isFail} deactive={props.onFailDismiss}>
                <p>{props.authFail.errorMessage}</p>
				<PasswordValidator label="UPDATE YOUR PASSWORD"/>
				<button onClick={reAuthenticateHandler}>RE AUTH</button>
        	</Modal>
		)
	} else {
		markup = (
			<Modal show={props.authFail.isFail} deactive={props.onFailDismiss}>
                <p>{props.authFail.errorMessage}</p>
        	</Modal>
		)
	}
	

    return (
        <>
        <p>{email}</p>
        <p>{uid}</p>
        <button onClick={signOutHandler}>LOGOUT</button><br />
        <button onClick={deleteUserHandler}>DELETE ACCOUNT!</button>
        <EmailValidator label="UPDATE YOUR EMAIL" />
        <button onClick={updateEmailHandler}>Update Email</button>

		{markup}
        </>
    )
}

const mapStateToProps = state => {
  return {
    authFail: state.user.authFail,
    authPassword: state.user.password.current,
    authEmail: state.user.email,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFail: (isFail, code, message) => dispatch(action.authFail(isFail, code, message)),
	onFailDismiss: () => dispatch(action.authFail(false)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(userAccount);