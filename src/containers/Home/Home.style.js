
import styled, {css} from 'styled-components';
import media from '../../theme/media';
import { RevealDiv } from '../../theme/grid';
import {blue,green} from '../../theme/variables';


//const Image = styled.img`width: 100%;`;

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${require('../../assets/view.jpg')});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;
 export const Maintitle = styled.div`
  color: ${blue};
  font-size: 2em;
  white-space: nowrap;
  margin-bottom: 0;
  text-align:center;
  ${media.tablet`
  font-weight: bold;
  font-size: .8em;
  `}
`;


export const HeroImage = styled.div`
  height: 100vh;
  width:100%;
  text-align: center;
  color:${blue};
  text-decoration:none;
  font-size: 2em;
  
   ${media.tablet`
    left: 40px;
    font-size: 1.5em;
    top: 13px;
  `}
   
`;

export const RevealP = styled.p`
position: relative;
text-align:center;
&:after{
  content:' ';
  position: absolute;
  top:0;
  left:0;
  width:100%
  height:100%
  background-color:#d8c4be;

  transform-origin:left;
  transform: rotateY(90deg);

  transition: transform 1s;
}

${({hide})=> hide && css`
 &:after {
   transform: rotateY(0deg);

 }
`}

`;

export const ImageContainer = styled(RevealDiv)`
  border: 3px solid black;
  height: 80%;
`;