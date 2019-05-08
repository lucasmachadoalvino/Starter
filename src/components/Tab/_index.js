import React, { Component } from 'react';
import { TabContainer, TabItem } from './style';
import IconList from '../../assets/img/tab-ic-list.png';
import IconGrid from '../../assets/img/tab-ic-grid.png';

class Tab extends Component {
  render() {
    const { tab1, active, activelist } = this.props;
    return (
      <TabContainer>
        <TabItem onClick={tab1} active={active}>
          <img src={IconGrid} alt="" />
          Grids
        </TabItem>
        <TabItem onClick={tab1} active={activelist}>
          <img src={IconList} alt="" />
          Lista
        </TabItem>
      </TabContainer>
    );
  }
}

export default Tab;
