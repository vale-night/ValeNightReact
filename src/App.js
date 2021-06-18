import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import 'fontsource-roboto';

import defaultTheme from './materialTheme';
import Header from './components/Header';
import Footer from './components/Footer';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import './App.css'
import Filtro from './pages/Filtro';

function App() {
  return (
  <ThemeProvider theme={defaultTheme}>
    <BrowserRouter>
        <Header />
            <Switch>
              <Route exact={true} path='/'>
                <Home />
              </Route>

              <Route exact={true} path='/cadastro'>
                <Cadastro />
              </Route>

              <Route exact={true} path='/filtro'>
                <Filtro />
              </Route>
              
            </Switch>
        <Footer />
    </BrowserRouter>
  </ThemeProvider>
  );
}

export default App;
