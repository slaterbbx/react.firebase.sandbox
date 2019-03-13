import styled from 'styled-components/macro';

export const IngredientsWrapper = styled.div`
    padding: 2rem 0;
    background-image: linear-gradient(to top left, ${({theme}) => theme.colorPrimaryAccent2}, ${({theme}) => theme.colorWhite});
`;