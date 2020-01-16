import React, { Component } from 'react';

class AspirationInput extends Component {

//create two separate forms
//on aspiration form, have a select to choose a preexisting dreamer
//toggle form under individual dreamer

    state = {
      title: '',
      category: '',
      timeframe: '',
      status: '',
      age: '',
      name: '',
      sex: ''
    };


  handleOnChange = event => {

    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const aspiration = this.state
    console.log(aspiration)
    this.props.createAspiration(aspiration)
    this.setState({
      title: '',
      category: '',
      timeframe: '',
      status: '',
      age: '',
      name: '',
      sex: ''
    });
  }

  render() {
    return (
      <div>
        <label>Add a New Aspiration!</label>
        <form onSubmit={(event) => this.handleOnSubmit(event)} >
          <input placeholder="Name" value={this.state.name} onChange={(event) => this.handleOnChange(event)} name="name" type="text"/><br/>
          <input placeholder="Age" value={this.state.age} onChange={(event) => this.handleOnChange(event)} name="age" type="text"/><br/>
          <input placeholder="Sex" value={this.state.sex} onChange={(event) => this.handleOnChange(event)} name="sex" type="text"/><br/>
          <input placeholder="Title" value={this.state.title} onChange={(event) => this.handleOnChange(event)} name="title" type="text"/><br/>
          <input placeholder="Category" value={this.state.category} onChange={(event) => this.handleOnChange(event)} name="category" type="text"/><br/>
          <input placeholder="Timeframe (in days)" value={this.state.timeframe} onChange={(event) => this.handleOnChange(event)} name="timeframe" type="text"/><br />
          <input placeholder="Status" value={this.state.status} onChange={(event) => this.handleOnChange(event)} name="status" type="text"/><br/>
          <b><input type="submit" /></b>
        </form>
      </div>
    );
  }
};

export default (AspirationInput);
