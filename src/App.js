import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import './App.css'

function App() {
  return (
	<BrowserRouter>
      <Header />
          <Switch>
            <Route exact={true} path='/'>
              <Home />
            </Route>
          </Switch>
      <Footer />
	</BrowserRouter>
  );
}

export default App;
