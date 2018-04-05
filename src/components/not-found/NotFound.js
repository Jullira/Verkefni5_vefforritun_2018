import React, { Component } from 'react';
import Helmet from 'react-helmet';

import { NavLink } from 'react-router-dom';
export default class Home extends Component {

  render() {
    return (
      <div>
        <Helmet title="Síða fannst ekki" />
        <p>Síða fannst ekki</p>
        <div className = "Home">
          <NavLink to = "/">
            Heim
          </NavLink>
        </div> 
      </div>
    );
  }
}
