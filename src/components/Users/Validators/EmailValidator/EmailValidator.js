import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../../../store/actions';
import Input from '../../../UI/FormElements/FormElements';

let CUSTOM_LABEL = '';

class emailValidator extends Component {

    state = {
        validity: 0,
        label: ''
    }

    validityHandler = (event) => {
        let newCreds = {...this.state};
        let curEmail = event.target.value;

        const validEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(curEmail)
        
        let isValid = false;
        if ( curEmail.length === 0) {
            newCreds.validity = 0;
            if (this.props.label) {
                newCreds.label = this.props.label;
            } else {
                newCreds.label = 'Enter a valid email';
            }
        } else if (validEmail) {
            newCreds.validity = 1; // success
            newCreds.label = 'Looks good to me!';
        } else if (curEmail && !validEmail) {
            newCreds.validity = 2; // warning
            newCreds.label = 'Email must be valid';
            isValid = true;
        }

        // NOT PASSING Errors yet
        this.props.onChangeEmail(curEmail, isValid)

        this.setState({
            validity: newCreds.validity,
            label: newCreds.label
        })
    }

    render() {

        if (this.props.label) {
            CUSTOM_LABEL = this.props.label;
        } else {
            CUSTOM_LABEL = 'Enter a valid email';
        }

        return( 
            <Input
            success={this.state.validity === 1 ? true : false}
            warn={this.state.validity === 2 ? true : false}
            inputType="input"
            name="email"
            label={this.state.label || CUSTOM_LABEL}
            onChange={this.validityHandler}
            value={this.props.currentEmail}
            placeholder="Email"
            autoComplete="current-email"/>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentEmail: state.user.email.current,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeEmail: (curEmail, validity, error) => dispatch(action.authValidation('email', curEmail, validity, error))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(emailValidator);