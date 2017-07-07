import { injectGlobal } from 'styled-components';
import media from './media';

/* eslint-disable */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Fira+Mono');

  body {
font-family: 'Fira Mono', monospace;
    font-size: 24px;
    color:black;
    background:white;
    margin: 0;
    padding: 10vh 10vw 10vh 10vw;
    ${media.tablet`
      padding: 0;
    `}
  }
  h1, h2, h3 {
    font-weight: normal;
  }
`