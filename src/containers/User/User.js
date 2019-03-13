import React, { Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components/macro';

import UserLogin from '../../components/Users/UserLogin/UserLogin';
import UserAccount from '../../components/Users/UserAccount/UserAccount';

const Wrapper = styled.div`
    margin: 4rem 2rem;

    .row {

        :not(:last-child) {
        margin-bottom: 1.5rem
        }
    }
`;

class User extends Component{

    render() {
        
        let markup;
        if (this.props.auth){
            markup = <UserAccount />
        } else if (!this.props.auth){
            markup = <UserLogin />
        }

        return (
            <Wrapper>
                {markup}
            </Wrapper>
        )
    }
};

const mapStateToProps = state => {
    return {
        authLoading: state.user.authLoading,
        auth: state.user.authenticated,
        authFail: state.user.authFail
    }
}

export default connect(mapStateToProps)(User);