## React-tabs

> Este é um componente de Tabs importado

https://reactcommunity.org/react-tabs/

Componente de Tabs (Abas) ReactJS

### Basic Example

```js
import List from '../../components/List';

const listData = [
  {
    id: 1,
    quantidade: '2',
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
];

export default () => (
  <List
    data={listData}
  />
);
```

## Props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">Nome</th>
        <th style="width: 50px;">Tipo</th>
        <th style="width: 50px;">Defult</th>
        <th>Descrição</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>data</td>
          <td>array</td>
          <td></td>
          <td>Título principal do Header</td>
        </tr>
        <tr>
          <td>itemClick</td>
          <td>function</td>
          <td></td>
          <td>Função para Callback do item</td>
        </tr>
        <tr>
          <td>delete</td>
          <td>function</td>
          <td>false</td>
          <td>Ícone e Callback para deletar item</td>
        </tr>
        <tr>
          <td>print</td>
          <td>function</td>
          <td>false</td>
          <td>Ícone e Callback de imprimir item</td>
        </tr>
        <tr>
          <td>pagination</td>
          <td>boolean</td>
          <td>false</td>
          <td>Botão para scroll da lista</td>
        </tr>
        <tr>
          <td>paginationContainer</td>
          <td>element</td>
          <td></td>
          <td>Pagination content</td>
        </tr>
        <tr>
          <td>search</td>
          <td>function</td>
          <td></td>
          <td>Função para Callback do input de busca para lista</td>
        </tr>
        <tr>
          <td>grid</td>
          <td>boolean</td>
          <td>false</td>
          <td>Modelo de visualização Grid/List</td>
        </tr>
    </tbody>
</table>


## Arrays

Lista de Arrys disponíveis para renderização da lista:
 * id
 * quantidade
 * comanda
 * responsavel
 * data `data/hora`
 * valor

