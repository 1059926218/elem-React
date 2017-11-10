import React, { Component } from 'react';
import './App.css';

import HeaderNav from './components/HeaderNav'
import Classify from './components/Classify'
import Merchant from './components/Merchant'

class App extends Component {
  render() {
    return (
      <div className="app">
        <HeaderNav></HeaderNav>
        <div className="container">
          <Classify></Classify>
          <Merchant></Merchant>
        </div>
      </div>
    );
  }
  
}

export default App;
