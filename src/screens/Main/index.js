import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import routes from '../../routes';
import { StyledContainer, StyledMain } from './style';
import SideBar from './sidebar';

const Main = () => (
  <Router>
    <StyledContainer>
      <SideBar />
      <StyledMain>
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
      </StyledMain>
    </StyledContainer>
  </Router>
);

export default Main;
