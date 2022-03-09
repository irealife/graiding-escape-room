import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import { appTheme } from './common';
import {AppRoute} from '../../const';
import * as S from './app.styled';
import NotFound from '../not-found/not-found';
import PageDevelopment from '../page-development/page-development';
import React from 'react';

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <Router>
        <Switch>
          <Route exact path={AppRoute.Home}>
            <Home />
          </Route>
          <Route exact path={AppRoute.DetailedQuest}>
            <DetailedQuest />
          </Route>
          <Route exact path={AppRoute.Beginners}>
            <PageDevelopment />
          </Route>
          <Route exact path={AppRoute.Reviews}>
            <PageDevelopment />
          </Route>
          <Route exact path={AppRoute.Sale}>
            <PageDevelopment />
          </Route>
          <Route exact path={AppRoute.Contacts}>
            <Contacts />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
