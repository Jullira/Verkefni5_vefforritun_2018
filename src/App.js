import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Route, Switch } from 'react-router-dom'

import './App.css';

import Home from './components/home';
import School from './components/school';
import Navigation from './components/navigation';
import NotFound from './components/not-found';

class App extends Component {
  render() {

    return (
      <main className="app">
        <Helmet defaultTitle = "Próftöflur" titleTemplate = "%s - Próftöflur" />
        <Navigation />
        <Switch>
          <Route exact path = "/:id" component = {School} />
          <Route exact path = "/" component = {Home} /> 
          <Route component = {NotFound} />
        </Switch>
      </main>
    );
  }
}

export default App;
