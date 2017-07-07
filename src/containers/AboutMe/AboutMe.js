import React, {Component} from 'react';
import {Container,Flex} from '../../theme/grid';
import {Title} from './AboutMe.style';
import Typist from 'react-typist';
import {H2, P ,FixedTitle} from '../../theme/types';
import FaBeer from 'react-icons/lib/fa/beer';


class AboutMe extends Component{

    render(){

        return (
            <Container>
                        <Typist className="msg1"  avgTypingSpeed={80} cursor={{ blink : false ,element:' ' }}  >

                        <FixedTitle>About Me</FixedTitle>

                        </Typist>
                          
<FaBeer />
                <H2 align="right"> hello </H2>
                <Flex>
                    <P align="right"> check out this </P>


                </Flex>
                </Container>
        );
    }
}

export default AboutMe;