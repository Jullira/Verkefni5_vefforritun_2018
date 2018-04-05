import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Helmet from 'react-helmet';

import Fetch from '../Fetch';
import './School.css';
import NotFound from '../not-found';
import Department from '../department';

/**
 * Í þessum component ætti að vera mest um að vera og séð um að:
 * - Sækja gögn fyrir svið og birta
 * - Opna/loka deildum
 */

export default class School extends Component {

  state = {activeDepartment: null};

  headingClick = (heading) => {
    if (this.state.activeDepartment === heading){
      this.setState({activeDepartment: null})
    } else {
      this.setState({ activeDepartment: heading });
    }
  }

  render() {

    return (
      <section className="school">
        <Fetch 
        key = {this.props.location.pathname}
        url = {this.props.location.pathname}
        render = {({ loading, error, data}) => {
          if (loading) {
            return (<div><Helmet title ="Loading Data" /> Loading... </div>);
          }

          if(error) {
            return (<div><Helmet title = "Error" />error fetching data</div>);
          }

          const { school } = data;

          const listItems = school.departments.map((department, i) => 
            <li key = {department.heading}>
              <Department data = {department} headingClick = {() => 
                this.headingClick(department.heading)} 
                departmentVisible = {this.state.activeDepartment} 
              />
            </li>
          );
          return(
            <div> 
              <h2>{school.heading}</h2>
              <ul>{listItems}</ul>
            </div>
          );
        }}
        />
      </section>
    );
  }
}
