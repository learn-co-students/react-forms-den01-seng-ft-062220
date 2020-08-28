import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  handleFirstNameChange = ({ target: { value }}) => {
    this.setState({
      firstName: value
    })
  }

  handleLastNameChange = ({ target: { value }}) => {
    this.setState({
      lastName: value
    })
  }

  render() {
    return (
      <form>
        <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
      </form>
    )
  }
}

export default Form;