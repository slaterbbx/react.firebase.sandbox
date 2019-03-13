import styled from 'styled-components/macro';

export const Wrapper = styled.div`
    color: ${({theme}) => theme.colorPrimaryAccent};

    .terms {
        font-size: 1.2rem;
        margin-bottom: 1.3rem;
    }
`;

export const Loading = styled.div`
    margin: 0 auto;
    padding: 4rem 0;
    width: 50%;
    max-width: 30rem;
`;