import React, { Component } from 'react';
import { NavigationContainer, NavItem } from './NavigationBar.style';

class NavigationBar extends Component {
  render() {
    return (
      <NavigationContainer>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/Projects">Projects</NavItem>
        <NavItem to="/SkillsRésumé">Skills/Résumé</NavItem>
      </NavigationContainer>
    );
  }
}

export default NavigationBar;