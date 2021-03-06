import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './routes/Login';
import Register from './routes/Register';
import Layout from './routes/Layout';
import Popup from './routes/popup/Popup';

import './App.css';
import './all-skins.min.css';
import './custom.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} /> 
          <Route path="/layout" component={Layout} /> 
          <Route path="/popup/popup" component={Popup} /> 
        </Switch>
      </Router>
    );
  }
}

export default App;
