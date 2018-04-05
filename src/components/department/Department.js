import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Department.css';

/**
 * Þessi component ætti að vera einfaldur í birtingu en taka fall frá foreldri
 * sem keyrir þegar smellt er á fyrirsögn.
 */

export default class Exams extends Component {

  render() {
    const { data, departmentVisible, headingClick } = this.props;
    const hello = data.heading === departmentVisible ? 
      <thead>
        <tr>
          <td>Auðkenni</td>
          <td>Námskeið</td>
          <td>Fjöldi</td>
          <td>Dagssetning</td>
        </tr>
      </thead> 
      : null;
    return (
      <section className="department">
        <p className="schoolSelect" onClick={headingClick}>{data.heading === departmentVisible? '-' : '+'}{data.heading}</p>
       <table className="testTable">
       {hello}
       <tbody>
        {data.heading === departmentVisible && (
          data.tests.map(test => 
            (<tr key={test.name}>
              <td className = "course">
                {test.course}
              </td>
              <td className = "name">
                {test.name}
              </td>
              <td className = "students">
              {test.students}
              </td>
              <td className = "date">
              {test.date}
              </td>
            </tr>)
          ))} 
      </tbody>
      </table>
      </section>
    );
  }
}

Exams.propTypes = {
  data: PropTypes.object,
  departmentVisible: PropTypes.string,
};