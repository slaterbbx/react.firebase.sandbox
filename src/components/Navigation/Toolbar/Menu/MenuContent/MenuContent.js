import React from 'react';
import * as Styles from './_menuContent-style';
import Icon from '../../../../UI/Icons/Icons';
import { Link, NavLink } from 'react-router-dom';

import { connect } from 'react-redux';

const menuContent = (props) => {

	let userLinkTitle = '';
	if ( props.auth ) {
		userLinkTitle = 'Account'
	} else {
		userLinkTitle = 'Login'
	}
	
	return (
        <Styles.Wrapper>
            <ul>
                <li>
                    <Link to={{
                        pathname: '/user',
                        // hash: '#submit',
                        // search: '?quick-submit=true'
                    }} onClick={props.menuClick.bind(null, true)}>
                        <span><Icon name="users" /></span>
                        {userLinkTitle}
                    </Link>
                </li>
                <li>
                    <NavLink to="/" activeClassName="active" onClick={props.menuClick.bind(null, true)}>
                        <span><Icon name="plus" /></span>
                        Home
                    </NavLink>
                </li>
            </ul>
        <Icon name="logo" styles={Styles.Logo}/>
        </Styles.Wrapper>
	)
};

const mapStateToProps = state => {
    return {
        auth: state.user.authenticated
    }
}

export default connect(mapStateToProps)(menuContent);