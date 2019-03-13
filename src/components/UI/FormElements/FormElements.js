import React from 'react';

import CheckBox from './CheckBox/CheckBox';
import InputField from './Input/Input';
import Password from './Password/Password';

const input = ( props ) => {

    let inputElement = null;
    const { inputType, ...other } = props;

    switch(inputType) {
        case ('input'):
        inputElement = <InputField other={{...other}} />
        break;
        case ('password'):
        inputElement = <Password other={{...other}} />
        break;
        case ('textarea'):
        inputElement = <textarea {...other} />
        break;
        case ('checkbox'):
        inputElement = <CheckBox other={{...other}}/>
        break;
        default:
        inputElement = <input {...other} />
    }


    return(
        <>
        {inputElement}
        </>
    );
};

export default input;