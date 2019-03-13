import styled, { css } from 'styled-components/macro';

const toolbarShared = css`
    height: ${({theme}) => theme.toolbarHeight};
    width: 100%;
`;
// Because the toolbar must be positioned absolutely
export const ToolbarPlaceholder = styled.div`
    ${toolbarShared}
`;

export const Toolbar = styled.header`
    ${toolbarShared}
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${({theme}) => theme.colorPrimary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    z-index: 20;
`;