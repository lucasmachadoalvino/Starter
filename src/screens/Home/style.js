import styled, { css } from 'styled-components';
import {
  Tab as UnstyledTab,
  TabList as UnstyledTabList,
  Tabs as UnstyledTabs,
  TabPanel as UnstyledTabPanel
} from 'react-tabs';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  ${props => props.center && css`
      background: #EFF2F8;
    `}
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  ${props => props.center && css`
      background: #EFF2F8;
    `}
`;

const Tabs = styled(UnstyledTabs)`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const TabList = styled(UnstyledTabList)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`;

const Tab = styled(UnstyledTab).attrs({
  selectedClassName: 'selected',
  disabledClassName: 'disabled',
})`
  flex-grow: 1;
  list-style: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  margin-left: 40px;
  position: relative;
  color: #99A5B8;
  outline: none;

  &.selected {
    color: #000000;
    border-bottom: none;
    &:before {
      content: '';
      width: 100%;
      height: 3px;
      position: absolute;
      left: 0;
      bottom: -10px;
      background: linear-gradient( to right, #FF5A20, #FFA009 );
      box-shadow: 0 3px 8px 0px rgba(213,91,44,.55);
    }
  }

  &.disabled {
    color: #99A5B8;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(UnstyledTabPanel).attrs({ selectedClassName: 'selected' })`
  display: none;
  padding: 10px 20px;
  &.selected {
    display: block;
  }
`;

Tab.tabsRole = 'Tab';
Tabs.tabsRole = 'Tabs';
TabPanel.tabsRole = 'TabPanel';
TabList.tabsRole = 'TabList';


export { Container, Content, Tab, TabList, Tabs, TabPanel }
