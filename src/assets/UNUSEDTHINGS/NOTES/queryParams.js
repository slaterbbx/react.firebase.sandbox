import React, { Component } from 'react';

import UserLogin from '../../components/Users/UserLogin/UserLogin';

class User extends Component{

    state = {
        authenticated: false,
    }

    queryParamsHandler = () => {

        let names = {
            bob: 'yes',
            mike: 'no',
            ricky: 'test'
        };

        let queryParams = [];
        for (let i in names) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(names[i]))
        }

        const queryString = queryParams.join('&');

        this.props.history.push({
            pathname: this.props.match.path,
            search: '?' + queryString
        })

        console.log(this.props.match);
    }

    queryParamsCheckerHandler = () => {
        const query = new URLSearchParams(this.props.location.search);

        const newNames = {};

        console.log(query);
        console.log(query.entries());

        for (let param of query.entries()) {
            console.log(param);
            // grabs the keys 0 and values 1 in the array and 
            newNames[param[0]] = param[1];
        }

        console.log(newNames);

    }

    render() {

        return (
            <>
            <UserLogin />
            <button onClick={this.queryParamsHandler}>SET URI</button>
            <button onClick={this.queryParamsCheckerHandler}>GET URI</button>
            </>
        );
    }
};

export default User;