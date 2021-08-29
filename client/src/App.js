import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../src/components/home/home'
import PageInit from '../src/components/pagePrincipal/pageinicial';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path='/home' component={Home} />
        <Route exact path='/' component={PageInit} />
       
      </header>

    </div>
  );
}

export default App;
