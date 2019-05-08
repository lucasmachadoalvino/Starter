import React, { Component } from 'react';
import { Content } from './style';
import Header from '../../components/Header';
import Keyboard from '../../components/Keyboard';
import Layout from '../../commons/layout';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: true,
    };
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }

  render() {
    return (
      <Layout footer={!this.state.isHidden} aside={<Header aside title="Terminal Livre" subtitle="Informe uma comanda para abrir ou adicionar" />}>
        <Header
          center
          title="Terminal Livre"
          subtitle="Informe uma comanda para abrir ou adicionar"
        />
        <Content>
          <Keyboard />
          <button onClick={this.toggleHidden.bind(this)}>aa</button>
        </Content>
      </Layout>
    );
  }
}

export default Home;
