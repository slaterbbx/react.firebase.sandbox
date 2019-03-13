import React from 'react';

import { css } from 'styled-components/macro';
import { rotate360 } from '../../../assets/styles/animations/_global-animations';
import Icon from '../Icons/Icons';

const loader = css`
    width: 100%;
    animation: ${rotate360} 1s infinite linear;
`;

const loading = () => <Icon name="spinner" styles={loader}/>;

export default loading;