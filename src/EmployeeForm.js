import React from "react";
class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
    };

    this.handleFistNameChange = this.handleFistNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFistNameChange(event) {
    this.setState({ firstName: event.target.value });
  }
  handleLastNameChange(event) {
    this.setState({ lastName: event.target.value });
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  handleSubmit(event) {
    //alert('Podano następujące imię: ' + this.state.value);
    console.log("Created", this.state);
    // if(this.state.firstName )
    this.props.onFormSubmit(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First name:
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.handleFistNameChange}
          />
        </label>
        <br />
        <label>
          Last name:
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.handleLastNameChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
        </label>
        <br />
        {/* <label>
              Liczba gości:
              <input
                name="numberOfGuests"            type="number"
                value={this.state.numberOfGuests}
                onChange={this.handleInputChange} />
            </label> */}
        <input type="submit" value="Create" />
      </form>
    );
  }
}
export default EmployeeForm;
