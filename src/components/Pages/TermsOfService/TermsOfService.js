import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 2rem;

    

    h1 {
        font-size: 2.4rem;
        margin-bottom: 1rem;
        border-bottom: .2rem solid ${({theme}) => theme.colorPrimaryAccent};
    }
`;

const termsOfService = () => (
    <Wrapper>
            <h1>Terms of Service</h1>
        <p>
        By using this website you agree and understand that vegiBurgerCo is a 100% fictitious / non existent company. this application was built by Kyle Gallagher only to gain knowledge in the React framework. You gain nothing by signing up for this website, you are owed nothing. Your information will not be sold or traded to anyone. You do not plan to nor will you ever attempt to take any legal action over anything related to this fake entity vegiBurgerCo. If the name of the fake company is conflicting with an entity you own, please contact me via my website <a href="https://lofde.com">https://lofde.com</a>
        </p>
    </Wrapper>
);

export default termsOfService;