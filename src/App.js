import React, { Component, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
// Rota
import { BrowserRouter } from 'react-router-dom';
import Main from './screens/Main';
// Estilos
import GlobalStyle from './commons/styles/global';
import theme from './commons/styles/theme';
import './App.css';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyle />
          <BrowserRouter>
            <Main />
          </BrowserRouter>
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
