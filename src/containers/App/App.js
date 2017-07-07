import React, { Component } from 'react';
import styled, {ThemeProvider} from 'styled-components';
import NavigationBar         from '../../components/NavigationBar/NavigationBar';
import SocialMedia           from '../../components/SocialMedia/SocialMedia';
import { Tablet, NonTablet } from '../../components/Media/Media';
import DivWithBgImage        from '../../components/DivWithBgImage/DivWithBgImage';
import Menub       from '../../components/Menu/Menub';
import {color2}    from '../../theme/variables';
import { Fixed }   from '../../theme/grid';
import media       from '../../theme/media';

const Body = styled.div`
  // background-color: ${color2};
  min-height: 100vh;
`;
const Background= styled.div`
  position: fixed;
  background-repeat:no-repeat;
  background-image: url(${require('../../assets/comp.gif')});
  background-color: white;
  background-size: 100%;
  background-position: center center;
  z-index: -99;
  opacity: 0.2;
  top: 10vh;
  left: 10vw;
  width: 79vw;
  height: 80vh;
  ${media.tablet`
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  `}
`;


class App extends Component {
  render() {
    return (
      <Body>

        <Tablet>
          
          <Menub/>
        </Tablet>

        <NonTablet>
          <NavigationBar/>
        </NonTablet>

         <Fixed bottom="100px" left="40px" hideInTablet>
            
              
              <SocialMedia/>
             
          </Fixed>

         
          
        <Background/>
      {this.props.children}   
      </Body>
    );
  }
}

export default App;
//