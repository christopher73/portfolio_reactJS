import style from 'styled-components';
import {Relative} from '../../theme/grid'

export const Title= style.h1`
margin-top:0;
color:red;

`;

export const VideoContainer=style(Relative)`
width:70%;
flex-shrink:0;
flex-grow:0;
`;