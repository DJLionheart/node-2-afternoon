import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import ProductManager from './Components/ProductManager'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Kool Market</h1>
          <hr/>
          <nav>
            <ul>
              <li>Product Manager</li>
              <li>Product Manager</li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path='/' component={ ProductManager }/>
        </Switch>
      </div>
    );
  }
}

export default App;
