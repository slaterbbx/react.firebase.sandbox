import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as action from '../../../store/actions';

import Input from '../../../components/UI/FormElements/FormElements';
import Button from '../../../components/UI/Button/Button';
import * as Styles from './_userLogin-styles';

import PasswordValidator from '../Validators/PasswordValidator/PasswordValidator';
import EmailValidator from '../Validators/EmailValidator/EmailValidator';

import Loading from '../../../components/UI/Loading/Loading';
import Modal from '../../../components/UI/Modal/Modal';

class UserLogin extends Component {
    
    state = {
        acceptTerms: true,
    }

    acceptTermsHandler = (value) => {
        this.setState({acceptTerms: value});
    }

    loginHandler = (type, event) => {
        event.preventDefault();
        const email = this.props.authEmail;
        const password = this.props.authPassword;
        this.props.onAuth(type, email, password);
        this.props.onClearFields();
    }

    render() {
        const cockpit = (
            <Styles.Wrapper>
            <form id="login" onSubmit={this.loginHandler.bind(null, 'login')} className="row">
                <div className="row">
                    <EmailValidator />
                </div>
                <div className="row">
                    <PasswordValidator/>
                </div>
                <div className="row u-global-alignCenter">
                    <div className="terms">Do you accept our <Link to="/user/tos">terms</Link> of service?</div>
                    <Input
                        onClick={this.acceptTermsHandler.bind(null, true)}
                        inputType="checkbox"
                        radio name="agreement"
                        label="Accept"
                        defaultChecked/>
                    <Input
                        onClick={this.acceptTermsHandler.bind(null, false)}
                        inputType="checkbox"
                        radio name="agreement"
                        label="Don't Accept"/>
                </div>
                </form>
                <div className="u-global-marginBottom-tiny u-global-fullWidth">
                    <Button fullWidth light disabled={!this.state.acceptTerms}
                    type="submit" form="login">
                    login
                    </Button>
                </div>
                <div className="u-global-fullWidth">
                    <Button fullWidth dark disabled={!this.state.acceptTerms}
                    onClick={this.loginHandler.bind(null, 'create')}>
                        Create Account
                    </Button>
                </div>
            </Styles.Wrapper>
        );

        let markup;
        if (this.props.authLoading){
            markup = <Styles.Loading><Loading /></Styles.Loading>
        } else if (!this.props.auth && !this.props.authLoading){
            markup = cockpit;
        }

        return(
            <>
            <Modal show={this.props.authFail.isFail} deactive={this.props.onFailDismiss}><p>{this.props.authFail.errorMessage}</p></Modal>
            {markup}
            </>
        );
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (type, email, password) => dispatch(action.auth(type, email, password)),
        onFailDismiss: () => dispatch(action.authFail(false)),
        onClearFields: () => dispatch(action.authClear())
    }
};

const mapStateToProps = state => {
    return {
        authLoading: state.user.authLoading,
        auth: state.user.authenticated,
        authFail: state.user.authFail,
        authPassword: state.user.password.current,
        authEmail: state.user.email.current,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);