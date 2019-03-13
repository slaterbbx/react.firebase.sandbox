import { createGlobalStyle } from "styled-components/macro";

const GlobalUtilities = createGlobalStyle`
    .u-global-alignRight {text-align: right !important;}
    .u-global-alignCenter {text-align: center !important;}

    .u-global-fullWidth {width: 100% !important;}

    .u-global-marginBottom-tiny {margin-bottom: 1rem !important;}
    .u-global-marginBottom-small {margin-bottom: 2rem !important;}
`;

export default GlobalUtilities;