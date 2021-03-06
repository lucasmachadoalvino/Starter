import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Content } from './style';
import Header from '../../components/Header';
import Keyboard from '../../components/Keyboard';
import Layout from '../../commons/layout';

class Home extends Component {
  render() {
    return (
      <Layout>
        <Header
          center
          title="Terminal Livre"
          subtitle="Informe uma comanda para abrir ou adicionar"
        />
        <Content>
          <Keyboard />
        </Content>
      </Layout>
    );
  }
}

export default Home;
