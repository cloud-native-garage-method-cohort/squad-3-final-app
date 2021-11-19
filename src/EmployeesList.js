import React from "react";
class EmployeesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const employees = this.props.employees;
    return (
      <div className="container">
        <h3 className="p-3 text-center">Employees</h3>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {employees &&
              employees.map((employee) => (
                <tr key={employee.id}>
                  <td>
                    {employee.firstName} {employee.lastName}
                  </td>
                  <td>{employee.email}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default EmployeesList;
