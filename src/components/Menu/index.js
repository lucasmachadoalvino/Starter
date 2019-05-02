import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { StyleMenu, StyleLogo, StyleLogout, StyleMenuItem } from './style';
import IconLogout from '../../assets/img/menu-ic-logout.png';
import IconLogo from '../../assets/img/menu-logo.png';

const MenuItem = props => {
  return (
    <Link to={props.callback}>
      <StyleMenuItem>
        <img src={props.icon} alt="" />
        <span>{props.title}</span>
      </StyleMenuItem>
    </Link>
  );
};

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }

  render() {
    return (
      <StyleMenu>
        <StyleLogo>
          <img src={IconLogo} alt="" />
        </StyleLogo>
        {this.state.data.map(({title, link, icon}) => (
          <MenuItem title={title} callback={link} icon={icon} />
        ))}
        <StyleLogout>
          <img src={IconLogout} alt="" />
          <span>Sair</span>
        </StyleLogout>
      </StyleMenu>
    );
  }
}

export default Menu;
