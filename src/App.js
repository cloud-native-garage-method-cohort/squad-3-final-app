import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [employees, setEmployees] = useState([
    { id: 1, firstName: 'Frank', lastName: 'Murphy', email: 'frank.murphy@test.com' },
    { id: 2, firstName: 'Vic', lastName: 'Reynolds', email: 'vic.reynolds@test.com' },
    { id: 3, firstName: 'Gina', lastName: 'Jabowski', email: 'gina.jabowski@test.com' },
    { id: 4, firstName: 'Jessi', lastName: 'Glaser', email: 'jessi.glaser@test.com' },
    { id: 5, firstName: 'Jay', lastName: 'Bilzerian', email: 'jay.bilzerian@test.com' }
]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
            <h3 className="p-3 text-center">React - Display a list of items</h3>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {employees && employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.firstName} {employee.lastName}</td>
                            <td>{employee.email}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>

      </header>
    </div>
  );
}

export default App;
