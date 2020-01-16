import React, { Component } from 'react';

class AspirationInput extends Component {



    state = {
      title: '',
      category: '',
      timeframe: '',
      status: ''
    };


  handleOnChange = event => {

    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const aspiration = this.state
    this.props.addAspiration(aspiration)
    this.setState({
      title: '',
      category: '',
      timeframe: '',
      status: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)} >
          <input placeholder="title" value={this.state.title} onChange={(event) => this.handleOnChange(event)} name="title" type="text"/><br/>
          <input placeholder="category" value={this.state.category} onChange={(event) => this.handleOnChange(event)} name="category" type="text"/><br/>
          <input placeholder="timeframe (in days)" value={this.state.timeframe} onChange={(event) => this.handleOnChange(event)} name="timeframe" type="text"/><br />
          <input placeholder="status" value={this.state.status} onChange={(event) => this.handleOnChange(event)} name="status" type="text"/><br/>
          <b><input type="submit" /></b>
        </form>
      </div>
    );
  }
};

export default (AspirationInput);
