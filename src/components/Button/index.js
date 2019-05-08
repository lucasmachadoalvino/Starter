import React, { Component } from 'react';
import { Btn } from './style';

class Button extends Component {
  render() {
    const { onClick, children, icon } = this.props;
    return (
      <Btn onClick={onClick}>
        {icon && <img src={icon} alt="" />}
        {children}
      </Btn>
    );
  }
}

export default Button;
