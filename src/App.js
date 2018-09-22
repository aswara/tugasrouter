import React, { Component } from 'react';
import Home from './komponen/Home';
import About from './komponen/About';
import Bootstrap from './komponen/Bootsrtap';
import Nav from './komponen/Nav';
import Counter from './komponen/Counter'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Nav />
        <div className="mb-5">
        <Switch>
          <Route path='/' component={Counter} exact />
          <Route path='/bootstrap' component={Bootstrap} />
          <Route path='/about' component={About} />
        </Switch>
       </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
