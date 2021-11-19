import React from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeesList from "./EmployeesList";
class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: this.props.employees,
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleFormSubmit(form) {
    let employees = this.state.employees;
    let lastId = employees[employees.length - 1].id;
    let newEmployee = form;
    newEmployee.id = lastId + 1;
    employees.push(newEmployee);
    this.setState({ employees: employees });
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
