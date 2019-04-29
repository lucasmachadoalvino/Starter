import React, { Component } from 'react';
import { StyleMenu, StyleLogo, StyleLogout } from './style';
import IconLogout from '../../assets/img/menu-ic-logout.png';
import IconLogo from '../../assets/img/menu-logo.png';

class Menu extends Component {
  render() {
    return (
      <StyleMenu>
        <StyleLogo>
          <img src={IconLogo} alt="" />
        </StyleLogo>
        {this.props.children}
        <StyleLogout>
          <img src={IconLogout} alt="" />
          <span>Sair</span>
        </StyleLogout>
      </StyleMenu>
    );
  }
}

export default Menu;
