import React from 'react';
import './App.css';
import Form from './Form';
import CardList from './CardList';

const testData = [];

const formStyle = {
  border: 'thin solid #ddd',
  backgroundColor: '#fbfbfb',
  padding: '2rem',
  marginBottom: '2rem',
  display: 'flex',
  justifyContent: 'center',
};
const headerStyle = {
  textAlign: 'center',
  fontSize: '1.5rem',
  marginBottom: '1rem',
};
class App extends React.Component {
  state = {
    profiles: testData,
  };
  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };
  render() {
    return (
      <div>
        <div style={headerStyle}>{this.props.title}</div>
        <Form style={formStyle} onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
