import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.colors.background};
  }
`;
