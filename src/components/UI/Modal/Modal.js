import React, { Component } from 'react';
import Backdrop from './Backdrop';
import * as Styles from './_modal-styles';

class modal extends Component {

    // Only class component for performance reasons

    // preventing the order summary from updating since it is a child
    // unless of course we are showing the modal, then it should update
    shouldComponentUpdate(nextProps) {
        return nextProps.show !== this.props.show;
    }

    render(){
        let isHidden;
        this.props.show ? isHidden = false : isHidden = true;

        return(
            <>
            <Backdrop show={this.props.show} deactive={this.props.deactive}/>
            <Styles.Modal hide={isHidden}>
                {this.props.children}
            </Styles.Modal>
            </>
        );
    }
}

export default modal;