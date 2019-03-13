import React from 'react';
import styled from 'styled-components/macro';

const BackdropStyle = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 499;
`;

const backdrop = (props) => (
    props.show ? <BackdropStyle onClick={props.deactive} /> : null
);

export default backdrop;