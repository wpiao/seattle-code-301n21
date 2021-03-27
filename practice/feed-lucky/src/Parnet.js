import React from 'react';
import Child from './Child.js';

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myStash: 42,
      luckysFood: 0
    }
  }

  calculatedFood = () => {
    this.setState({
      myStash: this.state.myStash - 1,
      luckysFood: this.state.luckysFood + 1
    });
  }
  render() {
    return (
      <>
        <h2>I am Parents</h2>
        <p>I have a stash for Lucky of {this.state.myStash}</p>
        <Child
          luckysFood={this.state.luckysFood}
          calculatedFood={this.calculatedFood}
        />
      </>
    )
  }
}

export default Parent;