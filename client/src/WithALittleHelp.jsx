import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Container from 'react-bootstrap/Container';
import MainPage from './components/MainPage';
import AboutBeatlesPage from './components/AboutBeatlesPage';
import AboutTeamPage from './components/AboutTeamPage';

const WithALittleHelp = () => {
  return (
    <BrowserRouter>
      <NavMenu />
      <Container>
        <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/beatles" component={AboutBeatlesPage} />
        <Route exact path="/team" component={AboutTeamPage} /> 
        </Switch>
      </Container>
    </BrowserRouter>
  );
};
export default WithALittleHelp;
