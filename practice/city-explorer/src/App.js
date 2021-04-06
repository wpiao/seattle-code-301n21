import React from 'react';
import Search from './Search.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      haveWeSearchedYet: false,
      citySearchedFor: '',
    }
  }

  handleSearch = citySearchedFor => {
    this.setState({
      haveWeSearchedYet: true,
      citySearchedFor: citySearchedFor
    });
    console.log(citySearchedFor);
  }

  render() {
    return (
      <>
        <h1>City Explorer</h1>
        <Search handleSearch={this.handleSearch} />
      </>
    );
  }
}

export default App;
