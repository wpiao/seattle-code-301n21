import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = React.createRef();
  }

  handleFormSubmitted = e => {
    e.preventDefault();
    this.props.handleSearch(this.textInput.current.value);
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmitted}>
        <input type="text" ref={this.textInput} />
        <input type="submit" />
      </form>
    );
  }
}

export default Search;
