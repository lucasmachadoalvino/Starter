## React-tabs

> Este é um componente de Tabs importado

https://reactcommunity.org/react-tabs/

Componente de Tabs (Abas) ReactJS

### Basic Example

```js
import { Tab, TabList, Tabs, TabPanel } from '../../components/Tab';

export default () => (
  <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
);
```


## Style

Componente importado e estilizado utilizando styled-components

```js
import styled from 'styled-components';
import {
  Tab as UnstyledTab,
  TabList as UnstyledTabList,
  Tabs as UnstyledTabs,
  TabPanel as UnstyledTabPanel,
} from 'react-tabs';

const Tabs = styled(UnstyledTabs)`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
`;

...

Tab.tabsRole = 'Tab';
Tabs.tabsRole = 'Tabs';
TabPanel.tabsRole = 'TabPanel';
TabList.tabsRole = 'TabList';

export { Tab, TabList, Tabs, TabPanel };
```