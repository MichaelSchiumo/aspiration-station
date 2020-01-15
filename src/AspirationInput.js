import React, { Component } from 'react';

class AspirationInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: '',
      timeframe: null,
      status: ''
    };
  };

  handleOnChange(event) {
    this.setState({
      title: event.target.value,
      category: event.target.value,
      timeframe: event.target.value,
      status: event.target.value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addAspiration(this.state)
    this.setState({
      title: '',
      category: '',
      timeframe: null,
      status: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)} >
          <input
            type="text"
            value={this.state.title}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default AspirationInput;
