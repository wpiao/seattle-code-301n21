import './CoolNumber.css';
import React from 'react';

class CoolNumber extends React.Component {
  render() {
    return (
      <div className="cool-number">
        <span>{this.props.number}</span>
        <span>{this.props.description}</span>
      </div>
    )
  }
}

export default CoolNumber;