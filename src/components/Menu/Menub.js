import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import {bubble as Menu} from 'react-burger-menu';
import Radium from 'radium';
import { Div,Fixed,Absolute } from "../../theme/grid";
import styled, {  ThemeProvider } from "styled-components";
import { brown,blue,socialMediaInverseColor } from '../../theme/variables';
import {Container, NavigationContainer, Nav } from '../../components/NavigationBar/NavigationBar.style';
import { A } from "../../theme/types";

import SocialMedia           from '../../components/SocialMedia/SocialMedia';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaGitHub from 'react-icons/lib/fa/github';
import FaPinterest from 'react-icons/lib/fa/pinterest';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import FaEnvelope from 'react-icons/lib/fa/envelope';

let RadiumLink = Radium(Link);
let RadiumIndexLink = Radium(IndexLink);

class Menub extends React.Component {


  render() {

     var styles = {
            bmBurgerButton: {
                position: 'fixed',
                width: '36px',
                height: '30px',
                right: '30px',
                top: '36px'
            },
            bmBurgerBars: {
                background: blue
            },
            bmCrossButton: {
                height: '24px',
                width: '24px'
            },
            bmCross: {
                background: 'red',
                height: '24px',
                opacity: '0.4'
            },
            bmMenu: {
                background: brown,
                padding: '1em 10px ',
                fontSize: '1em',
                textAlign: 'left',
                

            },
            bmMorphShape: {
                fill: brown
            },
            
        };
    return (


    <Menu right styles={styles} >


        <Nav to="/"><h1>Home</h1></Nav>
        <Nav to="/projects"><h1>Projects</h1></Nav>
        <Nav to="/aboutme"><h1>AboutMe</h1></Nav>

           <SocialMedia horizontal />  
         <p style={{ marginTop: 0,color:blue, textAlign:"center", fontSize:"1.5em"}}>EMAIL @   
           <A

                  style={{ marginLeft:"10px", color: "white" ,fontSize:"3em", textAlign:"center" }}
                  color="red"
                  href="mailto:christopher.fajardo73@gmail.com"
                >
                 <FaEnvelope/>
                </A>
              
       </p>
              

    </Menu>

    );
}
}

export default Menub;