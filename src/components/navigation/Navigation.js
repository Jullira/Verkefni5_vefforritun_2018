import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Helmet from 'react-helmet';

import './Navigation.css';
import Fetch from '../Fetch';

/* hér ætti að sækja gögn frá vefþjónustu fyrir valmynd */

export default class Navigation extends Component {

  render() {
    return (
      <nav className = "Navigation">
        <Fetch 
          url = '/'
          render = {({ loading, error, data }) => {
            if (loading) {
              return (<div><Helmet title ="Loading Data" /> Loading... </div>);
            }
            if(error) {
              return (<div><Helmet title = "Error" />error fetching data</div>);
            }

            return (
              <div className = "nav-main">
                <div className = "nav-felagsvisindasvid">
                  <NavLink to = "/felagsvisindasvid">Félagsvísindasvið</NavLink>
                </div>
                <div className = "nav-heilbrigdisvisindasvid">
                  <NavLink to ="/heilbrigdisvisindasvid">Heilbrigðisvísindasvið</NavLink>
                </div>
                <div className = "nav-hugvisindasvid">
                  <NavLink to ="/hugvisindasvid">Hugvísindasvið</NavLink>
                </div>
                <div className = "nav-menntavisindasvid">
                  <NavLink to ="/menntavisindasvid">Menntavísindasvið</NavLink>
                </div>
                <div className = "nav-Verk-og-natt">
                  <NavLink to ="/verkfraedi-og-natturuvisindasvid">Verkfræði- og náttúruvísindasvið</NavLink>
                </div>
              </div>
            );
          }}
        />  
      </nav>
    );
  }
}
