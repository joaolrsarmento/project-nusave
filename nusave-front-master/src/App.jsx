import React from 'react';
import { Redirect, BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';  

import * as routes from './routes';

import MainPage from './pages/MainPage';
import LoginPage from './pages/Login';

const theme = createMuiTheme({
  palette: {
     primary: {
        light: '#fff',
        main: '#81259D',
        dark: '#000'
     },
     secondary: {
       main: '#1589FF',
     },
  },
  typography: {
    "fontFamily": "\"Gotham SSm A\", \"Gotham SSm B\", \"Helvetica Neue\", sans-serif",
  },
});


const App = () => (
  <MuiThemeProvider theme = { theme }>
    <BrowserRouter>
      <Switch>
        <Route path={routes.LOGIN} component={LoginPage} />
        <Route path={routes.PRESENTATION} component={MainPage} />
        <Route path={routes.PROFILE} component={MainPage} />
        <Route path={routes.FEED} component={MainPage} />
        <Route path={routes.DATA} component={MainPage} />
        <Route path={routes.ADVISES} component={MainPage} />
        <Route path={routes.STATISTICS} component={MainPage} />
        <Route path="/">
          <Redirect to={routes.LOGIN} />
        </Route>
      </Switch>
    </BrowserRouter>
  </MuiThemeProvider>
);
export default App;
