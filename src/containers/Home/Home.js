import "babel-polyfill";
import React, {  Component} from 'react';
import styled from 'styled-components';
import { Relative,Container,Absolute } from '../../theme/grid';
import media from '../../theme/media';
import { Maintitle,RevealP, ImageContainer,Background } from './Home.style';
import {  A } from '../../theme/types';
import Typist from 'react-typist';
import WheninView from '../../components/WheninView/WheninView';
import ScrollIndicator from '../../components/ScrollIndicator/ScrollIndicator';
import WaypointShow from '../../components/WaypointShow/WaypointShow';

 class Home extends Component {

  render() {
    return (
     <div>
      <div>
        
       <WaypointShow>
            {({ show }) =>

        <Relative>
          <Background/>

        <Absolute center middle >

          <Maintitle>
          
          <Typist className="msg2"  avgTypingSpeed={80} cursor={{ blink : false ,element:'_' }}  >
            
           Christopher Fajardo <br/> [Full-Stack Developer]
            
          </Typist> 
          
          </Maintitle>
        </Absolute> 


        <Absolute center bottom="90px">
                  <ScrollIndicator color={'#443c3c'} style={{
                    width: 29,
                    height: 100
                  }}/>
        </Absolute>   
        </Relative>
            }
        </WaypointShow>
       


       <Container>
         <div>
          <WaypointShow>
            {({ show }) => 
        <WheninView>
          {({isInView}) =>
        <RevealP hide={!isInView}>
        Since very little I've always been curious about programming, but even more about design.
         I could still remember drawing figures with The Logo Language as a kid
         (relax I'm not that old but It's a good educational tool for children) or going to robotic classes at a young age.
         As I grew older, computers became more and more relevant to my life and the world so I decided to pursue a Computer Science major to fulfill this need of knowledge. 
         Now as a recent Computer Science graduate I decided to incorporate my skills and knowledge to being a Full Stack Developer. I love building
         customized web and mobile applications with a strong involvement from start to end (not the wix stuff ).          
        </RevealP>
        } 
        </WheninView> 
            }
            </WaypointShow> 
            <WaypointShow>
            {({ show }) =>
        <WheninView>
          {({isInView}) =>
        <RevealP hide={!isInView}>
         *Let me tell you a little about myself*, I was born in Peru but raised in NYC. I am a Knicks fan but hate it sometimes definitely  love the game of basketball. Another important thing is that  I really really love ramen
          (I even created a website where I rated my best ramen spots in the city called <A target="_blank" href="http://codeeveryday.life">RateRamen.com</A>).
          <br/>Living in this big city I learned to always sought out opportunities and challenges that are meaningful to me, and as
         a graduate I believe that I could make a big impact at a high growth company.
        </RevealP>
        } 
        </WheninView>
            }
            </WaypointShow>
            <WaypointShow>
            {({ show }) =>

        <WheninView>
          {({isInView}) =>
        <RevealP hide={!isInView}>

        <ImageContainer>
              <img
      
      
      width="100%"
      src={require('../../assets/rateramen1.PNG')}
      alt="rateramen"/>
        </ImageContainer>

        </RevealP>
        } 
        </WheninView>
            }
            </WaypointShow>
        </div>
      </Container>

          </div>
        </div>
    );
  }
}

export default Home;