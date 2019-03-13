import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../../../store/actions';
import Input from '../../../UI/FormElements/FormElements';

let CUSTOM_LABEL = '';

class passwordValidator extends Component {

    state = {
        validity: 0,
        label: ''
    }

    validityHandler = (event) => {
        let newCreds = {...this.state};
        let curPassword = event.target.value;

        const strongPass = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,64})/.test(curPassword);
        
        let isValid = false;
        if ( curPassword.length === 0) {
            newCreds.validity = 0;
            if (this.props.label) {
                newCreds.label = this.props.label;
            } else {
                newCreds.label = 'Enter a password';
            }
        } else if (strongPass) {
            newCreds.validity = 1; // success
            newCreds.label = 'Great password!';
        } else if (curPassword.length > 0 && curPassword.length < 6) {
            newCreds.validity = 3; // danger
            newCreds.label = 'Minimum of 6 characters';
            isValid = false;
        } else if (curPassword.length > 5) {
            newCreds.validity = 2; // warning
            newCreds.label = 'Could be stronger ( acceptable )';
            isValid = true;
        }

        // NOT PASSING Errors yet
        this.props.onChangePassword(curPassword, isValid)

        this.setState({
            validity: newCreds.validity,
            label: newCreds.label
        })
    }

    render() {

        if (this.props.label) {
            CUSTOM_LABEL = this.props.label;
        } else {
            CUSTOM_LABEL = 'Enter a password';
        }

        return( 
            <Input
            success={this.state.validity === 1 ? true : false}
            warn={this.state.validity === 2 ? true : false}
            danger={this.state.validity === 3 ? true : false}
            inputType="password"
            name="password"
            label={this.state.label || CUSTOM_LABEL}
            onChange={this.validityHandler}
            value={this.props.currentPassword}
            placeholder="Password"
            autoComplete="current-password"/>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentPassword: state.user.password.current,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangePassword: (curPassword, validity, error) => dispatch(action.authValidation('password', curPassword, validity, error))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(passwordValidator);