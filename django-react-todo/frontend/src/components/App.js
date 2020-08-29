
// components/App.js
import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';

import history from '../history'; 
import Dashboard from './todos/Dashboard'; 
import Header from './layout/Header'; 
import TodoDelete from './todos/TodoDelete'; 

import { Provider } from 'react-redux'; 
import store from '../store'; 


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Header />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/delete/:id' component={TodoDelete} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
