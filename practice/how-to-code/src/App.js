import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { flushSync } from 'react-dom';
import './App.css';

class App extends React.Component {
  // state: lets us store information within a component that's going to change
  constructor(props) {
    // this is always the first line of our constructor within a component
    super(props);
    // setting the state to be an object
    this.state = {
      numberOfExclamationPoints: 1,
      showModel: false
    };
  }
  buttonClicked = () => {
    this.setState({ numberOfExclamationPoints: this.state.numberOfExclamationPoints + 1 });
    console.log('Button is clicked!');
  }

  handleShow = () => {
    this.setState({
      showModel: true
    });
  }

  handleHide = () => {
    this.setState({
      showModel: false
    });
  }
  render() {
    let exclamationPoints = '';
    for (let i = 0; i < this.state.numberOfExclamationPoints; i++) {
      exclamationPoints += '!';
    }
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>Get exited{exclamationPoints}</h2>
        {/* <button onClick={this.buttonClicked}>Get more excited about learning to code by clicking here!</button> */}
        <Button variant="success" onClick={this.handleShow}>Open the Modal!</Button>
        <Modal show={this.state.showModel} onHide={this.handleHide}>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary">Close</Button>
              <Button variant="primary">Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </div>
    );
  }
}

export default App;
