import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import routes from '../../routes';
import StyledContainer from './style';
import MenuContainer from './menucontainer';

const Main = () => (
  <Router>
    <StyledContainer>
      <MenuContainer />
      <Link to="/">Home</Link>
      <Link to="/contato">Contato</Link>
      <Switch>
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </Switch>
    </StyledContainer>
  </Router>
);

export default Main;
