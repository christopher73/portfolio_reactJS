import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { A } from "../../theme/types";
import {brown,blue,  color3 } from '../../theme/variables';


import media from '../../theme/media';
import { Flex } from '../../theme/grid';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaGitHub from 'react-icons/lib/fa/github';
import FaPinterest from 'react-icons/lib/fa/pinterest';
import FaLinkedin from 'react-icons/lib/fa/linkedin';


const Container = styled(Flex)`
  color:red;
  text-align:center;
  align-content: center;
  font-size: 1.5em;
  transition: color .3s;
  z-index: 99;
  i {
    margin: 0 15px;
  }
  ${({ horizontal }) => !horizontal && css`
    transform: rotate(-90deg);
    transform-origin: left top;
    i {
      transform: rotate(90deg);
    }
  `}
  p {
    margin: 0 10px 0 0;
    color: ${blue};
  }
  a {
    /*color: white;*/
    color: ${blue};
    margin-left: 20px;
  }
  a:hover {
    color: ${blue};
    background: ${brown};
  }
  ${media.tablet`

    font-size: 1em;

  `}



`;

class SocialMedia extends Component {
  render() {
    const { /* menuOpen,  */horizontal, ...others } = this.props;
    return (
      <Container horizontal={horizontal} {...others}>
          
    
        
        <a >FOLLOW ME @</a>

        <a target="_blank"
          href="https://www.facebook.com/cffr90">
        <FaFacebook />            
        </a>

        <a target="_blank"
          href="https://www.instagram.com/bedownwiththebrown/">
        <FaInstagram/>
        </a>

        <a target="_blank"
          href="https://github.com/christopher73">
        <FaGitHub/>
       </a>

        <a target="_blank"
          href="https://www.pinterest.com/cffr905504/">
        <FaPinterest/>
       </a>

        <a target="_blank"
          href="https://www.linkedin.com/in/cffr90">
        <FaLinkedin/>
       </a>




      </Container>
    );
  }
}

export default SocialMedia;