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
import Carrinho from './pages/Ecommerce/Carrinho';
import FinalizarPedido from './pages/Ecommerce/FinalizarPedido';
import ConfirmacaoPagamento from './pages/Ecommerce/ConfirmacaoPagamento';
import Perfil from './pages/Perfil';
import EditarPerfil from './pages/Perfil/EditarPerfil';
import EditarDadosPessoais from './pages/Perfil/EditarDadosPessoais';

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

              <Route exact={true} path='/carrinho'>
                <Carrinho />
              </Route>

              <Route exact={true} path='/finalizarPedido'>
                <FinalizarPedido />
              </Route>
              
              <Route exact={true} path='/pagamento/sucesso'>
                <ConfirmacaoPagamento />
              </Route>

              <Route exact={true} path='/perfil'>
                <Perfil />
              </Route>

              <Route exact={true} path='/perfil/editar'>
                <EditarPerfil />
              </Route>

              <Route exact={true} path='/perfil/editarDadosPessoais'>
                <EditarDadosPessoais />
              </Route>
            </Switch>
        <Footer />
    </BrowserRouter>
  </ThemeProvider>
  );
}

export default App;
