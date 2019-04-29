import React, { Component } from 'react';
import rocket from '../../assets/img/rocket.png';
import { Title, Btn, Container } from './style';

class Contato extends Component {
  render() {
    return (
      <Container>
        <img src={rocket} alt="" />
        <Title>Starting your project... Contato</Title>
        <Title secondary>Stackoverflow developers</Title>
        <Btn>Components</Btn>
      </Container>
    );
  }
}

export default Contato;
