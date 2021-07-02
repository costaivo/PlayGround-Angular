import React from 'react'
import './App.css'

class Card extends React.Component {
  render() {
    return (
      <div className="gitthub-profile">
        <img src="https://placehold.it/75" />
        <div className="info">
          <div className="name">just a name</div>
          <div className="company">just a company</div>
        </div>
      </div>
    )
  }
}
class App extends React.Component {
  render() {

    return <div className="header">{this.props.title}
      <Card />
    </ div>
  }
}

export default App;
