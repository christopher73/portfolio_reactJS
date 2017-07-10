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
          <h1>Portfolio <A target="_blank" href="https://github.com/christopher73/portfolio_reactJS">*Source Code*</A></h1>
        </Relative>
        <p >
            I created this site 
        </p>
        <Flex justifyContent={'center'} marginBottom="5em">
            <Zoomy  imageUrl={require('../../assets/pt.png')} renderThumbnail={({ showImage }) =>   
                <ImageButton onClick={showImage}>   
                  <img width="100%" height="100%"     src={require('../../assets/pt.png')}  alt="rateramen"/> 
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
          <h1>Baby Shower invitation <A target="_blank" href="https://github.com/christopher73/babyshower">*Source Code*</A></h1>
        </Relative>
        <p >
            I created this site 
        </p>
        <Flex justifyContent={'center'} marginBottom="5em">
            <Zoomy  imageUrl={require('../../assets/bs.JPG')} renderThumbnail={({ showImage }) =>   
                <ImageButton onClick={showImage}>   
                  <img width="100%" height="100%"    src={require('../../assets/bs.JPG')}  alt="rateramen"/> 
                </ImageButton>
              }
              scale={[1.1, 1.1]}
              imageProps={{  style:{width: '100vw',height: 'auto'}  }}
            />
        </Flex>
<Relative marginBottom="50px">
 <Index> <h1>03</h1> </Index>
          <h1>Wheelers - Android App (hackathon nyc) <A target="_blank" href="https://github.com/christopher73/wheelers_app">*Source Code*</A></h1>
        </Relative>
        <p >
           I created this android application during the 2017 CUNY Hackathon. The purpose of this application was to provide a carwash delivery service to the public by providing the user's information such as the type of car, location and date/time of the appointment. We used android Studio to develop the applications and also for the backend we used Mysql and PHP. Alongside during the hackathon, we also created a rest API using JSON, J node, and MongoDB. Both projects are posted on Github, the links above.

        </p>
        <Flex justifyContent={'center'} marginBottom="5em">
            <Zoomy  imageUrl={require('../../assets/wheelers.png')} renderThumbnail={({ showImage }) =>   
                <ImageButton onClick={showImage}>   
                  <img  width="100%" height="100%"      src={require('../../assets/wheelers.png')}  alt="rateramen"/> 
                </ImageButton>
              }
              scale={[1.1, 1.1]}
              imageProps={{  style:{width: '100vw',height: 'auto'}  }}
            />
        </Flex>
<Relative marginBottom="50px">
 <Index> <h1>04</h1> </Index>
          <h1>ChatBot-App using Watson API (hackathon nyc) <A target="_blank" href="https://github.com/christopher73/IBM-s-Watson-API">*Source Code*</A></h1>
        </Relative>
        <p >
           During a hackathon/Workshop, we developed a Chatbot using the IBM Watson Conversation Service and Weather Underground's API to train the bot to tell the weather for a specific location (the app asked for permission to access your location) and time.
We used The IBM Watson™ Developer Cloud services (Bluemix)as our developer tools, it allowed us to use Node.js as our backend. IBM provides a Node.js package with wrappers that simplify application development. The web application's link is <a href="https://chrischatcom.mybluemix.net/">chrischatcom.mybluemix.net</a> all other source code was posted to my GitHub account !!

        </p>
        <Flex justifyContent={'center'} marginBottom="5em">
            <Zoomy  imageUrl={require('../../assets/watson.JPG')} renderThumbnail={({ showImage }) =>   
                <ImageButton onClick={showImage}>   
                  <img  width="100%" height="100%"    src={require('../../assets/watson.JPG')}  alt="rateramen"/> 
                </ImageButton>
              }
              scale={[1.1, 1.1]}
              imageProps={{  style:{width: '100vw',height: 'auto'}  }}
            />
        </Flex>

<Relative marginBottom="50px">
 <Index> <h1>05</h1> </Index>
          <h1>Rateramen (old) <A target="_blank" href="https://github.com/christopher73/RateRamen.com">*Source Code*</A></h1>
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
            The source codes could be found on GitHub (link is above).
        </p>
        <Flex justifyContent={'center'} marginBottom="5em">
            <Zoomy  imageUrl={require('../../assets/rateramenPw.PNG')} renderThumbnail={({ showImage }) =>   
                <ImageButton onClick={showImage}>   
                  <img  width="100%" height="100%"    src={require('../../assets/rateramenPw.PNG')}  alt="rateramen"/> 
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
  

    </Container>
    );
  }
}

export default Projects;