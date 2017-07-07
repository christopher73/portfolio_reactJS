import styled, { css } from 'styled-components';
import { brown } from '../../theme/variables';
import media from '../../theme/media';

export const ImageButton = styled.div`
  cursor: pointer;
  overflow: hidden;
  display: inline-block;
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

