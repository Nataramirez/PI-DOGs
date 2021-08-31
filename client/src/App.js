import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';

import Home from './components/home/home';
import PageInit from '../src/components/pagePrincipal/pageinicial';
import AddDog from '../src/components/addDog/pageAddDog'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/dogs"> <Home /></Route>
        <Route exact path='/' component={PageInit} />
        <Route exact path='/add' component={AddDog} />

      </header>


    </div>
  );
}
/* <Route exact path="/dogs"> <Home/></Route>*/
export default App;
