import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './komponen/Form';
import Header from './komponen/Header';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Form />
      </div>
    );
  }
}

export default App;
