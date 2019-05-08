import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ListContainer,
  ListContent,
  ListItem,
  ListQtde,
  ListComanda,
  LisSecondary,
  ListValue,
  ListDelet,
  Search,
  Pagination,
  PaginationButton,
  PaginationContent,
} from './style';
import IconPrint from '../../assets/img/list-ic-print.png';

const RenderItem = props => {
  const {
    id,
    quantidade,
    comanda,
    responsavel,
    data,
    valor,
    itemClick,
    btdelete,
    print,
  } = props;
  return (
    <ListItem key={id} onClick={itemClick}>
      <ListQtde>{quantidade}</ListQtde>
      <ListComanda>{comanda}</ListComanda>
      <LisSecondary>{responsavel}</LisSecondary>
      <LisSecondary>{data}</LisSecondary>
      <ListValue>{valor}</ListValue>
      {btdelete && (
        <ListDelet onClick={btdelete}>
          <img src={IconPrint} alt="" />
          <span>Imprimir</span>
        </ListDelet>
      )}
      {print && (
        <ListDelet onClick={print}>
          <img src={IconPrint} alt="" />
          <span>Imprimir</span>
        </ListDelet>
      )}
    </ListItem>
  );
};

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }

  componentDidMount() {
    document.onkeydown = checkKey;
    function checkKey(e) {
      e = e || window.event;
      if (e.keyCode == '38') {
        document.getElementById('ListTeste').scrollBy(0, -100);
      } else if (e.keyCode == '40') {
        document.getElementById('ListTeste').scrollBy(0, 100);
      }
    }
  }

  // Função de Scroll
  scrollWin(x, y) {
    document.getElementById('ListTeste').scrollBy(x, y);
  }

  render() {
    return (
      <ListContainer>
        {this.props.search && (
          <Search
            placeholder="Pesquisar Comanda"
            callBack={this.props.search}
          />
        )}
        <ListContent grid={this.props.grid} id="ListTeste" ref={this.props.ref}>
          {this.state.data.map(
            ({ quantidade, comanda, responsavel, data, valor, id }) => (
              <RenderItem
                key={id}
                id={id}
                quantidade={quantidade}
                comanda={comanda}
                responsavel={responsavel}
                data={data}
                valor={valor}
                btdelete={this.props.delete}
                print={this.props.print}
                itemClick={this.props.itemClick}
              />
            ),
          )}
        </ListContent>
        {this.props.pagination && (
          <Pagination>
            <PaginationContent>{this.props.paginationContainer}</PaginationContent>
            <PaginationButton down onClick={() => this.scrollWin(0, 100)} />
            <PaginationButton onClick={() => this.scrollWin(0, -100)} />
          </Pagination>
        )}
      </ListContainer>
    );
  }
}

List.propTypes = {
  data: PropTypes.array.isRequired,
  itemClick: PropTypes.func.isRequired,
  delete: PropTypes.func,
  print: PropTypes.func,
  pagination: PropTypes.bool,
  paginationContainer: PropTypes.element,
  search: PropTypes.func,
  grid: PropTypes.bool,
};

export default List;
