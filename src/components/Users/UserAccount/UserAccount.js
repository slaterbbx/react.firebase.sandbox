import React, { Component } from 'react';
import PasswordValidator from '../Validators/PasswordValidator/PasswordValidator';
import * as firebase from '../../../fireConfig';

import EmailValidator from '../Validators/EmailValidator/EmailValidator';
const user = firebase.auth.currentUser;
class userAccount extends Component {

    signOutHandler = () => {
        firebase.auth.signOut().then(() => {
            // Sign-out successful.
          }).catch(error => {
            // An error happened.
          });
    }

    updateEmailHandler = () => {
        user.updateEmail("user@example.com").then(function() {
            // Update successful.
          }).catch(function(error) {
            // An error happened.
          });
    }

    render() {

        const user = firebase.auth.currentUser;
        console.log(user);

        let email, uid;

        if (user != null) {
        email = user.email;
        uid = user.uid; 
        }

    return (
        <>
        <p>{email}</p>
        <p>{uid}</p>
        <button onClick={this.signOutHandler}>LOGOUT</button>
        <EmailValidator label="UPDATE YOUR EMAIL" />
        <PasswordValidator label="UPDATE YOUR PASSWORD"/>
        </>
    )
    }
}

export default userAccount;