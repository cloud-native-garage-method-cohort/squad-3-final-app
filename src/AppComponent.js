import React from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeesList from "./EmployeesList";
import axios from "axios";

const url = "/api/employees"
class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  componentDidMount() {
    this.getEmployees();
  }
  getEmployees() {
    axios
      .get(url)
      .then((response) => this.setState({ employees: response.data.employees }))
      .catch((error) => {
        alert(error.message);
      });
  }
  createEmployee(newEmployee) {
    axios
      .post(url, newEmployee)
      .then((response) => {

        let employees = this.state.employees;
        employees.push(newEmployee);
        this.setState({ employees: employees });
      })
      .catch((error) => {
        alert(error.message);
      });
  }
  handleFormSubmit(form) {
    this.createEmployee(form);
  }
  render() {
    return (
      <div>
        <EmployeeForm onFormSubmit={this.handleFormSubmit} />
        <EmployeesList employees={this.state.employees} />
      </div>
    );
  }
}
export default AppComponent;
