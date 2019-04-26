import React, { Component } from 'react';
import rocket from '../../assets/img/rocket.png'
import {
  Title,
  Btn,
  Container,
} from './style'


class Home extends Component {
  render() {
    return (
      <Container>
          <img src={rocket} alt="" />
          <Title>Starting your project... test2</Title>
          <Title secondary>Stackoverflow developers</Title>
          <Btn>Components</Btn>
      </Container>
    );
  }
}

export default Home;
