import React from 'react';
import Backdrop from './Backdrop';
import * as Styles from './_modal-styles';

const modal = (props) => {

        let isHidden;
        props.show ? isHidden = false : isHidden = true;

        return(
            <>
            <Backdrop show={props.show} deactive={props.deactive}/>
            <Styles.Modal hide={isHidden}>
                {props.children}
            </Styles.Modal>
            </>
        );
}

export default modal;