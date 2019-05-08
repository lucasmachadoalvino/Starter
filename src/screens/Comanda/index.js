import React, { Component, Fragment } from 'react';
import Header from '../../components/Header';
import List from '../../components/List';
import Button from '../../components/Button';
import { Tab, TabList, Tabs, TabPanel } from '../../components/Tab';
import Layout from '../../commons/layout';
import { FooterList, ListValue, FooterValue } from './style';
import Keyboard from '../../components/Keyboard';
import IconValue from '../../assets/img/ic-coins.png';
import IconBtDown from '../../assets/img/bt-ic-down.png';
import IconBtPrint from '../../assets/img/bt-ic-print.png';

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
];

const RenderAside = () => {
  return (
    <Fragment>
      <Header
        title="Lançamento"
        subtitle="Efetue o lançamento de itens à comanda"
      />
      <Keyboard />
    </Fragment>
  );
};

const RenderFooter = () => {
  return (
    <Fragment>
      <Button icon={IconBtPrint}>Pré Fechamento</Button>
      <Button icon={IconBtDown}>Cancelar Comanda</Button>
      <FooterValue>
        <span>Valor total da comanda 02 Itens</span>
        <hr />
        R$ 9,50
      </FooterValue>
    </Fragment>
  );
};

class Comanda extends Component {
  render() {
    return (
      <Tabs>
        <Layout aside={<RenderAside />} footer={<RenderFooter />}>
          <Header title="Comanda 08" subtitle="Comanda Pendente" back>
            <TabList>
              <Tab>Histórico</Tab>
              <Tab>Lançamento</Tab>
            </TabList>
          </Header>
          <TabPanel>
            <List
              data={listData}
              print={() => this.mensagem('Teste')}
              itemClick={() => this.mensagem('Teste')}
            />
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <FooterList>
            <img src={IconValue} alt="" />
            <ListValue>
              <span>Valor total</span>
              R$ 27,00
            </ListValue>
            <Button>Lançar Itens</Button>
          </FooterList>
        </Layout>
      </Tabs>
    );
  }
}

export default Comanda;
