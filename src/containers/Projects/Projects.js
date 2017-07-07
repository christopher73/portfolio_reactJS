import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import {
  ImageButton,
  Index,
  ImageContainer,
  Title
} from './Projects.style';
import { Container,Relative,Flex } from '../../theme/grid';
import Typist from 'react-typist';
import { A,FixedTitle } from '../../theme/types';
import ParallaxImage from 'react-image-parallax2';
import Menub       from '../../components/Menu/Menub';

class Projects extends Component {
  render() {
    return (
      
       <Container>
        
        <Typist className="msg1"  avgTypingSpeed={80} cursor={{ blink : true ,element:'_' }}  >
         <FixedTitle>Projects</FixedTitle>
         </Typist>
        <Relative marginTop="100px" marginBottom="50px">
          <Index>
            <h1>01</h1>
          </Index>
          <h1>npm install --save <A href="">react-zoomy</A></h1>
        </Relative>
        <Flex justify={'center'} marginBottom="5em">
          <Zoomy
            imageUrl={require('../../assets/comp.gif')}
            renderThumbnail={({ showImage }) =>
              <ImageButton onClick={showImage}>
                <img
                width="100%"
                  src={require('../../assets/comp.gif')}
                  alt="basketball"/>
              </ImageButton>
            }
            scale={[1.1, 1.1]}
            imageProps={{
              style: {
                width: '100vw',
                height: 'auto'
              }
            }}
          />
        </Flex>
        <Relative marginBottom="50px">
          <Index>
            <h1>02</h1>
          </Index>
          <h1>npm install --save <A href="">react-image-parallax2</A></h1>
        </Relative>
        <ImageContainer>
          <ParallaxImage
            reduceHeight={1/3}
            src={require('../../assets/comp2.gif')}/>
        </ImageContainer>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

      </Container>
    );
  }
}

export default Projects;