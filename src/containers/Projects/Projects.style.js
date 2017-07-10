import styled, { css } from 'styled-components';
import { brown } from '../../theme/variables';
import media from '../../theme/media';

export const ImageButton = styled.div`
  cursor: pointer;
  border-style: solid;
  overflow: hidden;
  display: inline-block;
  width:600px;
  height:400px;
   ${media.tablet`
  width:250px;
  height:200px;
  `}
  & > img {
    transition: transform .3s;
  }
  &:hover {
    & > img {
      transform: scale(1.3);
    }
  }
`;

export const Index = styled.div`
  position: absolute;
  bottom: 0;
  z-index: -1;
  font-size: 3em;
  h1 {
    margin: 0;
    font-weight: bold;
    color: ${brown};
    opacity: 0.5;
    transform: translateY(20%);
  }
`;

export const ImageContainer = styled.div`
  width: 800px;
  ${media.tablet`
  width:100%;
  `}
  margin-left:auto;
  margin-right:auto;
`;



export const Title = styled.h1`
  color: red;
 
  margin-top: 0;
`;

