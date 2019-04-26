import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../../routes';
import StyledContainer from './style';


const Main = () => (
  <StyledContainer>
      <Switch>
        {/* <Route exact path='/' component={Home}/> */}
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </Switch>
  </StyledContainer>
)

export default Main