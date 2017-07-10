import React, {Component} from 'react';
import {Container,Flex,Relative} from '../../theme/grid';
import Typist from 'react-typist';
import {H2, P ,A,FixedTitle} from '../../theme/types';
import Zoomy from 'react-zoomy';
import {
  ImageButton,
  Index,
  ImageContainer,
  Title
} from '../Projects/Projects.style';
import Charts from '../../components/Charts/Charts';


class AboutMe extends Component{

  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['JavaScript ', 'C++','Java (Android)', 'HTML5/CSS3 ', 'PHP/MySQL ', 'Node.js/MongoDB', 'Photoshop/Illustrator'],
        datasets:[
          {
            label:'Power Levels',
            data:[
              95,
              85,
              70,
              97,
              80,
              72,
              80
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',         
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    });
  }



    render(){

   


        return (
            <Container>  
                <Typist className="msg1"  avgTypingSpeed={80} cursor={{ blink : false ,element:' ' }}  >
                    <FixedTitle>Skills/Résumé</FixedTitle>
                </Typist>

                <Relative  marginTop="50px" >
                    <Index>
                        <h1>{'>'}9000!!!</h1>
                    </Index>
                    <h1>Skills</h1>
                </Relative>
                <Relative marginBottom="100px">  
                    <Charts  chartData={this.state.chartData} legendPosition="bottom"/>
                </Relative>
                
                <Relative marginBottom="50px">
                    <Index>
                        <h1>Résumé</h1>
                    </Index>
                    <h1>Résumé<A target="_blank" href="https://drive.google.com/file/d/0BzQ2A8GqXvz9MWoxUVNLWTdSVk0/view">*PDF link*</A></h1>
                </Relative>
                <p >
                    Have a quick look  
                </p>
                
                <Flex justifyContent={'center'} marginBottom="5em">
                    <Zoomy  imageUrl={require('../../assets/resume.jpg')} renderThumbnail={({ showImage }) =>   
                        <ImageButton onClick={showImage}>   
                        <img width="100%" height="100%"     src={require('../../assets/resume.jpg')}  alt="rateramen"/> 
                        </ImageButton>
                        }
                        scale={[1.1, 1.1]}
                        imageProps={{  style:{width: '100vw',height: 'auto'}  }}
                    />
                </Flex>

            </Container>
        );
    }
}

export default AboutMe;