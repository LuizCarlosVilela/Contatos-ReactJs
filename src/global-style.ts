import { createGlobalStyle } from 'styled-components';

export const Styles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    html {
        font-size: 16px;
    }

    html, body, #root {
        height: 100%;
    }
`;