import React, { Component } from 'react';
import { Container, Content } from './style';
import Header from '../../components/Header';
import Keyboard from '../../components/Keyboard';

class Home extends Component {
  render() {
    return (
      <Container>
        <Header
          center
          title="Terminal Livre"
          subtitle="Informe uma comanda para abrir ou adicionar"
        />
        <Content>
          <Keyboard />
        </Content>
      </Container>
    );
  }
}

export default Home;
