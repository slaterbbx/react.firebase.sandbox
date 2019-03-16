// This component is visable when the user is logged in via switch on User/User.js container

// Using low level email and password validator components that store state in redux
// we are able to drop those in here, catch errors that also dispatch to redux and use those to
// manage error and reAuthentication that also uses the global low level password 
// validator and current user email address to reAuth the user when needed. ( based on error code )

// NOTE: should just create a global redux state for error handling, has a isError / code / message fields.
// then add that to userlogin, useraccount, emailvalidator and passwordvalidator

import React, { useState } from 'react';
import * as firebase from '../../../fireConfig';

import { connect } from 'react-redux';
import * as action from '../../../store/actions'

import PasswordValidator from '../Validators/PasswordValidator/PasswordValidator';
import EmailValidator from '../Validators/EmailValidator/EmailValidator';
import Modal from '../../UI/Modal/Modal';

import reAuthHelper from './reAuthHelper';

const userAccount = props => {
	
	const user = firebase.auth.currentUser;

	const [ emailAddress, setEmailAddress ] = useState('');
	const [ needReAuth, setNeedReAuth ] = useState(false);
	// confirm delete account
	const [ delAccount, setDelAccount ] = useState(false);
	const [ delAccountModal, setDelAccountModal ] = useState(false);

    const signOutHandler = () => {
        firebase.auth.signOut().then(() => {
			// Sign-out successful.
			// Since authWatcher is global, will kick user out to login screen
          }).catch(error => {
			// An error happened.
			console.log('[ ERROR > During SignOut ] ', error);
          });
	}	

    const updateEmailHandler = () => {
		// if email is valid based on emailValidator validity in redux
		if (props.authEmail.validity) {
			user.updateEmail(props.authEmail.current).then(() => {
				// should be optimal to set email locally to what should have been accepted by the update
				// intead of what I was doing before and checking every page load if they matched.
				setEmailAddress(props.authEmail.current)

				// Reset email to an empty string
				props.onResetEmail();
			}).catch(function(error) {
				// reAuthHelper determines if the error is related to a reAuth needed
				const reAuth = reAuthHelper(error.code, error.message)
				setNeedReAuth(reAuth.setNeedReAuth)
				// send isFail bool, error code and error message to redux
				props.onFail(reAuth.error.isFail, reAuth.error.code, reAuth.error.message)
			});
		} else {
			setNeedReAuth(false);
			props.onFail(true, 'invalid email', 'please use a valid email address')
		}
	}
	
	const reAuthenticateHandler = () => {
		// EmailAuthProvider is from firebase/app ( poor / confusing documentation on this )
		const credential = firebase.fb.auth.EmailAuthProvider.credential(user.email, props.authPassword.current);

		user.reauthenticateAndRetrieveDataWithCredential(credential).then(function() {
			// User re-authenticated.
			// Close modal used for delete account if its open
			setDelAccountModal(false);
			// Close modal for error message / reAuth if they are open
			props.onFailDismiss();
			// set password back to an empty string
			props.onResetPassword();
			// run update email handler ( only needs to runs when we are reAuth for email update )
			if (props.authEmail.validity){
				updateEmailHandler();
			}

		}).catch(function(error) {
			// An error happened.
			console.log('[ ERROR > During ReAuth ] ' , error);
		});
		setNeedReAuth(false);
	}

	// used for closing any custom modals specific to this page functionality
	const closeModalHandler = () => {
		// closes custom delete account modal
		setDelAccountModal(false);
	}

	const deleteUserHandler = () => {
		// "ARE YOU SURE YOU WANT TO DELETE YOUR ACCOUNT!?"
		// opens custom delete account modal containing a message and a confirm button
		if (delAccount === false){
			setDelAccountModal(true);
		}
	}

	const confirmDeleteUserHandler = () => {
		// We set delAccount to true, this means the user has confirmed they want to delete.
		setDelAccount(true);
		// We can now close the custom modal that is shown for delete account
		setDelAccountModal(false);

			user.delete().then(function() {
				// User deleted.
				// because the authWatcher is global, the page will reload back to the Auth screen
			}).catch(function(error) {
				// If error is that a reAuth is needed, then the reAuth modal will be shown
				// reAuthHelper determines if the error is related to a reAuth needed
				const reAuth = reAuthHelper(error.code, error.message)
				setNeedReAuth(reAuth.setNeedReAuth)
				// send isFail bool, error code and error message to redux
				props.onFail(reAuth.error.isFail, reAuth.error.code, reAuth.error.message)
			});
	}
	

	// checks for email address validity between what is shown and what exists on the server
	// server always wins when in doubt
	let uid;
	if (user != null) {
		// set "emailAddress" state to the logged in users email address
		// if check here so that we do not hit an infinate loop
		if (user.email !== emailAddress) {
			setEmailAddress(user.email)
		}
	// This is just shown for debugging / testing reasons, remove in future
	uid = user.uid;
	}

	// Dynamic page markup content
	let markup;
	// reAuth modal
	if ( needReAuth === true ) {
		// if re-Auth is needed, we show the passwordValidator and a button to confirm reAuth
		// the button fires the function for reAuth using the redux password Validators current value
		markup = (
			<Modal show={props.authFail.isFail} deactive={props.onFailDismiss}>
                <p>{props.authFail.errorMessage}</p>
				<PasswordValidator />
				<button onClick={reAuthenticateHandler}>RE AUTH</button>
        	</Modal>
		)
	// all other errors modal
	} else if ( needReAuth === false ) {
		// if re-Auth is NOT needed, we only show the error message
		markup = (
			<Modal show={props.authFail.isFail} deactive={props.onFailDismiss}>
                <p>{props.authFail.errorMessage}</p>
        	</Modal>
		)
	}
	// Custom modal for delete user account confirmation
	if ( delAccountModal === true ) {
		markup = (
			<Modal show={delAccountModal} deactive={closeModalHandler}>
                <p>Are you sure that you want to delete your account?</p>
				<button onClick={confirmDeleteUserHandler}>YES DELETE IT</button>
        	</Modal>
		)
	}
	
	// No styling for now, style this later
    return (
        <>
        <p>{emailAddress}</p>
        <p>{uid}</p>
        <button onClick={signOutHandler}>LOGOUT</button><br />
        <button onClick={deleteUserHandler}>DELETE ACCOUNT!</button>
        <EmailValidator label="UPDATE YOUR EMAIL ADDRESS" />
        <button onClick={updateEmailHandler}>Update Email</button>

		{markup}
        </>
    )
}

const mapStateToProps = state => {
  return {
    authFail: state.user.authFail,
    authPassword: state.user.password,
    authEmail: state.user.email,
  }
}

const mapDispatchToProps = dispatch => {
  return {
	// used to send any error messages that will be used to open the modal
	onFail: (isFail, code, message) => dispatch(action.authFail(isFail, code, message)),
	// Using to close the modal
	onFailDismiss: () => dispatch(action.authFail(false)),
	// we just fire these off based on event to reset the password and email to empty
	onResetPassword: () => dispatch(action.authValidation('password', '', false)),
	onResetEmail: () => dispatch(action.authValidation('email', '', false))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(userAccount);