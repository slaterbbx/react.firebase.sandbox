import React from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
    position: relative;
    font-size: 2rem;
    text-align: center;
    letter-spacing: .2rem;
    text-transform: uppercase;
    font-weight: 700;
    margin-top: 4rem;

    h1 {
        font-size: 10rem;
        letter-spacing: 1rem;
    }
`;

const error404 = () => (
    <Wrapper>
        <h1>404</h1>
        <p>Wrong page...</p>
    </Wrapper>
);

export default error404;