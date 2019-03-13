// OLD WAY OF CODE SPLITTING 
// CUMBERSOME PROCESS

// import asyncComponent from './hoc/asyncComponent';
// const AsyncNewPost = asyncComponent(() => {
//     return import('./components/Pages/404/404')
// });

// use AsyncNewPost

import React, { Component } from 'react';

const asyncComponent = (importComponent) => {

    return class extends Component {
        state = {
            component: null
        }
    
        componentDidMount() {
            importComponent()
                .then(cmp => {
                    this.setState({component: cmp.default});
                })
        }
        
        render () {
            const C = this.state.component;
            return C ? <C {...this.props} /> : null;
        };
    }
}

export default asyncComponent;