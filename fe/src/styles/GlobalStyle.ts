import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%
  }

  body * {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  }

  a {
    text-decoration: none;
  }

  input {
    border: none;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;

    &:focus-visible {
      outline: 0;
    }
  }

  button { 
    cursor: pointer;
  }
`;

export default GlobalStyle;
