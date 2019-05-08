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
    const { title, subtitle, children, back, center, aside } = this.props;
    return (
      <HeaderBar aside={aside} center={center}>
        {back && (
          <HeaderBack onClick={back}>
            <img src={IconBack} alt="" />
          </HeaderBack>
        )}
        <HeaderContent>
          <HeaderTitle>{title}</HeaderTitle>
          <HeaderSubtitle>{subtitle}</HeaderSubtitle>
        </HeaderContent>
        {children}
      </HeaderBar>
    );
  }
}

export default Header;
