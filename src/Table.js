import React from "react";
import {useState, useEffect} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import axios from "axios";


export class Table extends React.Component {
  state = {
    rows: [],
    courseName: "",
    semister: "Choose Semester",
    date: ""
  };
  componentDidMount() {
    this.getDate();
  };
  selectSemister = (e) => {
    this.setState({ semister: e });
  };

  getDate = () => {
    var date = new Date().toDateString();
    this.setState({ date });
  };
  handleChange = (idx) => (e) => {
    const { name, value } = e.target;
    const rows = [...this.state.rows];
    rows[idx] = {
      [name]: value,
    };
    this.setState({
      rows,
    });
  };
  addCourse = (e) => {
    this.setState({ courseName: e });
  };

  handleSubmit(event) {
    alert("form sent");
  }

  requestCurriculum = () => {
    const axios = require('axios').default;

    // Make a request for a user with a given ID
    axios.get('http://localhost:8000/api/Curriculum/?idd=4')
      .then(function (response) {
        // handle success
        alert(response.data[0].idd);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    
  }
  handleAddRow = () => {
    this.requestCurriculum();

    const item = {
      name: this.state.courseName,
    };
    this.setState({
      rows: [...this.state.rows, item],
    });
  }
  
  render() {

    const {date} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <div style={{position: 'relative',textAlign: "center", right: '500px',bottom: '-50px'}}>
          
          <label>
              <strong>Doctor Name: </strong>
              <label id="name">Dr.Ameer</label>
              
            </label>
          </div>
          <div id = 'Date' style={{position: 'relative',textAlign: "center", right: '530px',bottom: '-50px'}}>{date}</div>

          <div style={{ textAlign: "center", margin: "auto" }}>
            <DropdownButton
              align="start"
              style={{ margin: "25px" }}
              id="dropdown-button"
              onSelect={this.selectSemister}
              title={this.state.semister}
            >
              <Dropdown.Item eventKey="Spring 20/21">
                Spring 20/21
              </Dropdown.Item>
              <Dropdown.Item eventKey="Summer 20/21">
                Summer 20/21
              </Dropdown.Item>
              <Dropdown.Item eventKey="Fall 19/20">Fall 19/20</Dropdown.Item>
            </DropdownButton>

            <div style={{ textAlign: "center", margin: "auto" }}>
              <DropdownButton
                align="start"
                style={{ margin: "25px" }}
                id="dropdown-button"
                onSelect={this.addCourse}
                title="Choose Course"
              >
                <Dropdown.Item eventKey="207-Data Structures">
                  207-Data Structures
                </Dropdown.Item>
                <Dropdown.Item eventKey="200-MATLAB">200-MATLAB</Dropdown.Item>
                <Dropdown.Item eventKey="363-INTROD. TO EMBEDDED SYSTEMS">
                  363-INTROD. TO EMBEDDED SYSTEMS
                </Dropdown.Item>
                <Dropdown.Item eventKey="213-Linear Circuits">
                  213-Linear Circuits
                </Dropdown.Item>
                <Dropdown.Item eventKey="495-Capstone Design">
                  495-Capstone Design
                </Dropdown.Item>
              </DropdownButton>

              <Button
                style={{ marginBottom: "25px" }}
                onClick={this.handleAddRow}
              >
                Add Course
              </Button>
            </div>
          </div>

          <div className="container">
            <div className="row clearfix">
              <div className="col-md-12 column">
                <table
                  className="table table-bordered table-hover"
                  id="tab_logic"
                >
                  <thead>
                    <tr>
                      <th className="text-center"> # </th>
                      <th className="text-center"> Course Name </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.rows.map((item, idx) => (
                      <tr id="addr0" key={idx}>
                        <td>{idx + 1}</td>
                        <td>
                          <input
                            type="text"
                            name="name"
                            value={this.state.rows[idx].name}
                            onChange={this.handleChange(idx)}
                            className="form-control"
                            readOnly
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div id ='Notes' style={{textAlign: "center", right: '550px',bottom: '-50px'}} >
        <label>
          <strong>Doctor Notes:</strong>
          <textarea
            style={{ width: "100%", height: 130 }}
          ></textarea>
          <button type="submit">Submit</button>
        </label>
        </div>
      </form>
    );
  }
}

