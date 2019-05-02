import React, { Component } from 'react';
import IconBack from '../../assets/img/ic-back.png';
import {
  HeaderBar,
  HeaderTitle,
  HeaderSubtitle,
  HeaderBack,
  HeaderContent,
} from './style';

class Header extends Component {
  render() {
    const { title, subtitle, right, back, center } = this.props;
    return (
      <HeaderBar center={center}>
        { back && 
          <HeaderBack onClick={back}>
            <img src={IconBack} alt="" />
          </HeaderBack>
        }
        <HeaderContent>
          <HeaderTitle>{title}</HeaderTitle>
          <HeaderSubtitle>{subtitle}</HeaderSubtitle>
        </HeaderContent>
        {right}
      </HeaderBar>
    );
  }
}

export default Header;
