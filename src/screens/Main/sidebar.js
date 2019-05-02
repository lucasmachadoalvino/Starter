import React, { Component } from 'react';
import Menu from '../../components/Menu';
import IconPendente from '../../assets/img/menu-ic-cart.png';
import IconConsulta from '../../assets/img/menu-ic-search.png';

const menuData = [
  { id: 1, title: 'Pendentes', link: '/contato', icon: IconPendente },
  { id: 2, title: 'Abertos', link: '/contato', icon: IconPendente },
  { id: 3, title: 'Consulta', link: '/contato', icon: IconConsulta },
];
class SideBar extends Component {
  render() {
    return <Menu data={menuData} />;
  }
}

export default SideBar;
