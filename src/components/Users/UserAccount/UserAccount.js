import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import PasswordValidator from '../Validators/PasswordValidator/PasswordValidator';
import * as firebase from '../../../fireConfig';

import * as action from '../../../store/actions'

import EmailValidator from '../Validators/EmailValidator/EmailValidator';
import Modal from '../../UI/Modal/Modal';

const userAccount = props => {

	const user = firebase.auth.currentUser;
	const onFailMapThis = props.onFail;

    const signOutHandler = () => {
        firebase.auth.signOut().then(() => {
            // Sign-out successful.
          }).catch(error => {
            // An error happened.
          });
	}
	
	const deleteUserHandler = () => {
		user.delete().then(function() {
			// User deleted.
		}).catch(function(error) {
			onFailMapThis(true, error.code, error.message)
		});
	}

    const updateEmailHandler = () => {
		if (props.authEmail.validity) {	
			user.updateEmail(props.authEmail.current).then(() => {
				// Update successful.
			}).catch(function(error) {
				onFailMapThis(true, error.code, error.message)
				if (error.code === 'auth/requires-recent-login') {
					// In future make more convenient method to update email instead of log out and back in
				}
			});
		} else {
			onFailMapThis(true, 'invalid email', 'please use a valid email address')
		}
    }

    let email, uid;
    if (user != null) {
      email = user.email;
      uid = user.uid; 
	}
	
	// <PasswordValidator label="UPDATE YOUR PASSWORD"/>

    return (
        <>
        <p>{email}</p>
        <p>{uid}</p>
        <button onClick={signOutHandler}>LOGOUT</button><br />
        <button onClick={deleteUserHandler}>DELETE ACCOUNT!</button>
        <EmailValidator label="UPDATE YOUR EMAIL" />
        <button onClick={updateEmailHandler}>Update Email</button>

        <Modal show={props.authFail.isFail} deactive={props.onFailDismiss}>
                <p>{props.authFail.errorMessage}</p>
        </Modal>
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