import styled from 'styled-components';
import { Fixed, Div } from '../../theme/grid';
import { brown,blue } from '../../theme/variables';
import { Link } from 'react-router';
import media from '../../theme/media';

export const NavigationContainer = styled(Fixed)`
  right: 10vh;
  top: 28px;
  z-index: 99;
  background: white;
  padding: 5px;
  font-size: 1em;
`;


export const NavItem = styled(Link)`
  margin-left: 25px;
  position: relative;
  transition: color .3s;
  color:${blue};
  &:hover {
    color:${blue};
  }
  &:after {
    content: ' ';
    z-index: -1;
    position: absolute;
    top: 0;
    left: -25px;
    width: calc(100% + 45px);
    height: 0;
    transition: height .3s;
  }
  &:hover::after {
    height: 100%;
    background-color: ${brown};
    transform: scale(1, 1.6);
  }
`;

export const Nav = styled(Link)`

  margin-bottom: 60px;
  margin-top: 60px;
  text-align:center;
  position: relative;
  transition: color .3s;
  color:${blue};
   &:hover {
    color:${brown};
    background-color:${blue};
  }
  &:after {
    content: ' ';
    z-index: -1;
    position: absolute;
    top: 0;
    left: -20px;
    width: calc(100% + 40px);
    height: 0;
    transition: height .3s;
  }
  &:hover::after {
    height: 100%;
    background-color: ${blue};
    transform: scale(1, 1.6);
  }
 
`;