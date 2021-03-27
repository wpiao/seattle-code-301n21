import React from 'react';

class Child extends React.Component {

  feedLucky = () => {
    console.log('Lucky wants food!');
    this.props.calculatedFood();
  }

  render() {
    console.log(this.props);
    return (
      <>
        <h3>Hi I'm child</h3>
        <p>I am Lucky, I'm SOOO HUNGRY and have had {this.props.luckysFood} cups of food today!</p>
        <button onClick={this.feedLucky}>FEEED MEEEE!</button>
      </>
    )
  }
}

export default Child;
