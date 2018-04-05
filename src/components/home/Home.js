import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './Home.css';
import Fetch from '../Fetch';

/* hér ætti að sækja forsíðu vefþjónustu til að sækja stats */

export default class Home extends Component {

  render() {
    
    return (
      <div className = "Home">
      <Fetch 
        url = '/stats'
        render = {({ loading, error, data }) => {
          if (loading) {
            return (<div><Helmet title ="Loading Data" /> Loading... </div>);
          }

          if(error) {
            return (<div><Helmet title = "Error" />error fetching data</div>);
          }

          const { stats } = data;

          return (
            <div>
              <Helmet title = "Próftöflur" />
              <h2 className = "stats-header">Tölfræði prófa</h2>
              <ul>
                <li>
                  <div>Fjöldi prófa: {stats.numTests}</div>
                </li>
                <li>
                  <div>Fjöldi nemenda í prófum: {stats.numStudents}</div>
                </li>
                <li>
                  <div>Meðalfjöldi nemenda í prófi: {stats.averageStudents}</div>
                </li>
                <li>
                  <div>Minnsti fjöldi í prófi: {stats.min}</div>
                </li>
                <li>
                  <div>Mesti fjöldi í prófi: {stats.max}</div>
                </li>
              </ul>
            </div>
            )
          }}
        />
      </div>
    );
  }
}
