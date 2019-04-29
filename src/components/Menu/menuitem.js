import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { StyleMenuItem } from './style';

class MenuItem extends Component {
  render() {
    const { callback, icon, title } = this.props;
    return (
      <Link to={callback}>
        <StyleMenuItem>
          <img src={icon} alt="" />
          <span>{title}</span>
        </StyleMenuItem>
      </Link>
    );
  }
}

export default MenuItem;
