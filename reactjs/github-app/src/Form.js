import React from 'react';
import getGithubUser from './Github.service';

class Form extends React.Component {
  state = { userName: '' };
  handleSubmit = async (event) => {
    // This is required to prevent the page from submitting
    event.preventDefault();
    console.log(this.state.userName);
    const response = await getGithubUser(this.state.userName);
    this.props.onSubmit(response.data);
    this.setState({ userName: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
          placeholder="Github Username"
          required
        />
        <button>Add Card</button>
      </form>
    );
  }
}

export default Form;
