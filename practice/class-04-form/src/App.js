import React from 'react';
import Header from './Header.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'user'
    };
  }

  handleFormSubmitted = e => {
    e.preventDefault();
    console.log('submitted');
  }

  handleUsernameTyped = e => {
    this.setState({
      username: e.target.value
    });
  }

  render() {
    return (
      <div>
        <Header username={this.state.username}></Header>
        <form onSubmit={this.handleFormSubmitted}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" onInput={this.handleUsernameTyped} />
          <br />
          <label htmlFor="date">Date ofBirth</label>
          <input type="date" name="bob" id="bob" />
          <br />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default App;
