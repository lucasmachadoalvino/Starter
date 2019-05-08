import React, { Component } from 'react';
import List from './index';

const listData = [
  {
    id: 1,
    quantidade: 5,
    comanda: '00548',
    responsavel: 'Sérgio Vieira',
    data: '23/04 - 10:35',
    valor: 'R$ 32,50',
  },
  {
    id: 2,
    quantidade: 5,
    comanda: '00548',
    responsavel: 'Sérgio Vieira',
    data: '23/04 - 10:35',
    valor: 'R$ 32,50',
  },
];

class Example extends Component {
  render() {
    return (
      <div>
        <List
          grid={false} // Visão em Grid ou Lista
          data={listData} // State Data
          delete={() => this.mensagem('Exemplo')} // Botão de deletar
          print={() => this.mensagem('Exemplo')} // Botão de reeimprimir
          search={() => this.mensagem('Exemplo')} // Campo de busca
          itemClick={() => this.mensagem('Exemplo')} // Ação de click do item
          pagination={false} // Paginação
          paginationContainer={<div>Abrir nova comanda</div>} // Paginação Container
        />
      </div>
    );
  }
}

export default Example;
