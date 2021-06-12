import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Cadastro from './pages/Cadastro';
import './App.css'

function App() {
  return (
	<BrowserRouter>
      <Header />
          <Switch>
            <Route exact={true} path='/'>
              Hello World
            </Route>

            <Route exact={true} path='/cadastro'>
              <Cadastro />
            </Route>
            
          </Switch>
      <Footer />
	</BrowserRouter>
  );
}

export default App;
