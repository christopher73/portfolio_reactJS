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
        <Typist className="msg1"  avgTypingSpeed={80} cursor={{ blink : true ,element:' ' }}>
          <FixedTitle>Projects</FixedTitle>
        </Typist>
        
        <Relative marginTop="50px" marginBottom="50px">
          <Index> <h1>01</h1> </Index>
          <h1>Portfolio <A target="_blank" href="http://rateramen.com">www.rateramen.com</A></h1>
        </Relative>
        <p >
            I created this site 
        </p>
        <Flex justifyContent={'center'} marginBottom="5em">
            <Zoomy  imageUrl={require('../../assets/rateramenPw.PNG')} renderThumbnail={({ showImage }) =>   
                <ImageButton onClick={showImage}>   
                  <img  width="400px" height="400px"    src={require('../../assets/rateramenPw.PNG')}  alt="rateramen"/> 
                </ImageButton>
              }
              scale={[1.1, 1.1]}
              imageProps={{  style:{width: '100vw',height: 'auto'}  }}
            />
        </Flex>


        <Relative marginBottom="50px">
          <Index>
            <h1>02</h1>
          </Index>
          <h1>Baby Shower invitation <A target="_blank" href="http://christopherfajardo73.cf">Using ReactJS</A></h1>
        </Relative>
        <Flex justifyContent={'center'} marginBottom="5em">
            <Zoomy  imageUrl={require('../../assets/bs.JPG')} renderThumbnail={({ showImage }) =>   
                <ImageButton onClick={showImage}>   
                  <img  width="400px" height="400px"    src={require('../../assets/bs.JPG')}  alt="rateramen"/> 
                </ImageButton>
              }
              scale={[1.1, 1.1]}
              imageProps={{  style:{width: '100vw',height: 'auto'}  }}
            />
        </Flex>

<Relative marginBottom="50px">
 <Index> <h1>04</h1> </Index>
          <h1>Rateramen (old) <A target="_blank" href="http://rateramen.com">www.rateramen.com</A></h1>
        </Relative>
        <p >
            I created this site to display information from my MySQL database on a
            Google Map using the Google Maps JavaScript API. Google’s Map APIs allowed 
            me to connect my own database in order to pinpoint locations and add markers 
            with a display message. The map retrieves this information from the database,
            through an XML file that acts as an intermediary between the database and the map.
            In this project, I used HTML, PHP, MySQL, JAVASCRIPT and XML to create the 
            connections needed and animations in the website.
            There are many improvements that could be done on this page, such as sorting and
            selecting a specific restaurant, access to my database (an API could be created
            so others could access it), have clients write and post their own reviews, etc.
            The source codes could be found on GitHub (link is below).
        </p>
        <Flex justifyContent={'center'} marginBottom="5em">
            <Zoomy  imageUrl={require('../../assets/rateramenPw.PNG')} renderThumbnail={({ showImage }) =>   
                <ImageButton onClick={showImage}>   
                  <img  width="400px" height="400px"    src={require('../../assets/rateramenPw.PNG')}  alt="rateramen"/> 
                </ImageButton>
              }
              scale={[1.1, 1.1]}
              imageProps={{  style:{width: '100vw',height: 'auto'}  }}
            />
        </Flex>




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