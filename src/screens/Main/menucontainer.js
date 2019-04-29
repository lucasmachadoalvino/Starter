import React, { Component } from 'react';
import Menu from '../../components/Menu';
import MenuItem from '../../components/Menu/menuitem';
import IconPendente from '../../assets/img/menu-ic-cart.png';
import IconConsulta from '../../assets/img/menu-ic-search.png';

class MenuContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, title: "Pendentes", link: "/contato", icon: IconPendente },
        { id: 2, title: "Abertos", link: "/contato", icon: IconPendente },
        { id: 3, title: "Consulta", link: "/contato", icon: IconConsulta },
      ],
    };
  }

  render() {
    return (
      <Menu>
        {this.state.data.map(({title, link, icon}) => (
          <MenuItem 
            title={title}
            callback={link}
            icon={icon}
          />
        ))}
      </Menu>
    );
  }
}

export default MenuContainer;
