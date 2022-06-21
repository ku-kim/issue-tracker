import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import SIZE from './size';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
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

  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
  }

  .wrap {
    width: ${SIZE.WIDTH}px;
    max-width: ${SIZE.WIDTH}px;
    margin: 0 auto;
  }

  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default GlobalStyle;
