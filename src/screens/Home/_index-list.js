import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Content } from './style';
import Header from '../../components/Header';
import Keyboard from '../../components/Keyboard';
import Layout from '../../commons/layout';

// class Home extends Component {
//   render() {
//     return (
//       <Layout>
//         <Header
//           center
//           title="Terminal Livre"
//           subtitle="Informe uma comanda para abrir ou adicionar"
//         />
//         <Content>
//           <Keyboard />
//         </Content>
//       </Layout>
//     );
//   }
// }

class Tab extends Component {
  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label },
    } = this;

    let className = 'tab-list-item';

    if (activeTab === label) {
      className += ' tab-list-active';
    }

    return (
      <div className={className} onClick={onClick}>
        {label}
      </div>
    );
  }
}

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = tab => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this;

    return (
      <div className="tabs">
          {children.map(child => {
            const { label } = child.props;
            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
      </div>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <Layout>
        <div>
          <h1>Tabs Demo</h1>
          <Tabs>
            <div label="Gator"  onClick={() => console.log("teste")}/>
            <div label="Croc" />
            <div label="Sarcosuchus" />
          </Tabs>
        </div>
      </Layout>
    );
  }
}

export default Home;
