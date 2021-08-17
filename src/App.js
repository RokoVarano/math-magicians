/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Home from './components/Home';
import Quote from './components/Quote';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/calculator" component={Calculator} />
            <Route path="/quote" component={Quote} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
/* eslint-enable react/prefer-stateless-function */
