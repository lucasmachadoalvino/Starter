import React, { Component } from 'react';
import Header from '../../components/Header';
import List from '../../components/List';
import Button from '../../components/Button';
import Layout from '../../commons/layout';
import { Container } from './style';
import { Tab, TabList, Tabs } from '../../components/Tab';
import IconList from '../../assets/img/tab-ic-list.png';
import IconGrid from '../../assets/img/tab-ic-grid.png';

const listData = [
  {
    id: 1,
    quantidade: '5',
    comanda: '00548',
    responsavel: 'Sérgio Vieira',
    data: '23/04 - 10:35',
    valor: 'R$ 32,50',
  },
  {
    id: 2,
    quantidade: '5',
    comanda: '00548',
    responsavel: 'Sérgio Vieira',
    data: '23/04 - 10:35',
    valor: 'R$ 32,50',
  },
  {
    id: 3,
    quantidade: '5',
    comanda: '00548',
    responsavel: 'Sérgio Vieira',
    data: '23/04 - 10:35',
    valor: 'R$ 32,50',
  },
  {
    id: 4,
    quantidade: '5',
    comanda: '00548',
    responsavel: 'Sérgio Vieira',
    data: '23/04 - 10:35',
    valor: 'R$ 32,50',
  },
  {
    id: 5,
    quantidade: '5',
    comanda: '00548',
    responsavel: 'Sérgio Vieira',
    data: '23/04 - 10:35',
    valor: 'R$ 32,50',
  },
  {
    id: 6,
    quantidade: '5',
    comanda: '00548',
    responsavel: 'Sérgio Vieira',
    data: '23/04 - 10:35',
    valor: 'R$ 32,50',
  },
  {
    id: 7,
    quantidade: '5',
    comanda: '00548',
    responsavel: 'Sérgio Vieira',
    data: '23/04 - 10:35',
    valor: 'R$ 32,50',
  },
  {
    id: 8,
    quantidade: '5',
    comanda: '00548',
    responsavel: 'Sérgio Vieira',
    data: '23/04 - 10:35',
    valor: 'R$ 32,50',
  },
  {
    id: 9,
    quantidade: '5',
    comanda: '00548',
    responsavel: 'Sérgio Vieira',
    data: '23/04 - 10:35',
    valor: 'R$ 32,50',
  },
  {
    id: 10,
    quantidade: '5',
    comanda: '00548',
    responsavel: 'Sérgio Vieira',
    data: '23/04 - 10:35',
    valor: 'R$ 32,50',
  },
];

class Comandas extends Component {
  mensagem(text) {
    console.log(text);
  }

  constructor() {
    super();
    this.state = {
      grid: true,
    };
  }

  toggleHidden(state) {
    this.setState({
      grid: state,
    });
  }

  render() {
    return (
      <Tabs>
        <Layout>
          <Container>
            <Header
              title="Comandas Pendentes"
              subtitle="06 Comandas pendentes no total"
            >
              <TabList>
                <Tab onClick={() => this.toggleHidden(true)}>
                  <img src={IconList} alt="" />
                  Lista
                </Tab>
                <Tab onClick={() => this.toggleHidden(false)}>
                  <img src={IconGrid} alt="" />
                  Grid
                </Tab>
              </TabList>
            </Header>
            <List
              grid={!this.state.grid}
              data={listData}
              print={() => this.mensagem('Teste')}
              search={() => this.mensagem('Teste')}
              itemClick={() => this.mensagem('Teste')}
              pagination
              paginationContainer={<Button>Abrir nova comanda</Button>}
            />
          </Container>
        </Layout>
      </Tabs>
    );
  }
}

export default Comandas;
