import React, { PureComponent } from 'react';

import { connect } from 'react-redux';
import * as firebase from '../../fireConfig';
import * as acton from '../../store/actions';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import styled from 'styled-components/macro';

const Main = styled.div`
    display: flex;
    flex-direction: column;

    /* WANT TO MAKE THIS DYNAMIC CALCULATION FOR NUMBER OF ITEMS IN LIST! DO SOON */
    height: calc(100vh - ${({theme}) => theme.toolbarHeight});
    @media only screen and (max-height: ${825 / 16}em) {
        height: 82.5rem;
    }
`;

class layout extends PureComponent {

    state = {
        menuActive: false,
    }

    menuActiveHandler = () => {
        this.setState(prevState => (
            {menuActive: !prevState.menuActive}
        ))}

    render(){
        firebase.auth.onAuthStateChanged(user => {
            if (user) {
                console.log('LOGGED');
                this.props.onAuthChange(true);
            } else {
                console.log('NOT LOGGED');
                this.props.onAuthChange(false);
            }
        });

        return(
            <>
            <Toolbar menuClick={this.menuActiveHandler} menuActive={this.state.menuActive}/>
            <Main>
                {this.props.children}
            </Main>
            </>
        )
    };
};

const mapStateToProps = state => {
    return {
        auth: state.user.authenticated
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAuthChange: (payload) => dispatch(acton.authChange(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(layout);