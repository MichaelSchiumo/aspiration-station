import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createAspiration } from '../actions/aspirationsActions'

class AspirationInput extends Component {

//create two separate forms
//on aspiration form, have a select to choose a preexisting dreamer
//toggle form under individual dreamer

    state = {
      title: '',
      category: '',
      timeframe: '',
      status: '',

    };


  handleOnChange = event => {

    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const aspiration = this.state
    this.props.createAspiration(aspiration)
    console.log(aspiration)
    this.setState({
      title: '',
      category: '',
      timeframe: '',
      status: ''
    });
    return ( <div>Aspiration Created!</div> )
  }

  render() {
    return (
      <div>
        <label>Add a New Aspiration!</label>
        <form onSubmit={(event) => this.handleOnSubmit(event)} >
          <input placeholder="Title" value={this.state.title} onChange={(event) => this.handleOnChange(event)} name="title" type="text"/><br/>
          <input placeholder="Category" value={this.state.category} onChange={(event) => this.handleOnChange(event)} name="category" type="text"/><br/>
          <input placeholder="Timeframe (in days)" value={this.state.timeframe} onChange={(event) => this.handleOnChange(event)} name="timeframe" type="text"/><br />
          <input placeholder="Status" value={this.state.status} onChange={(event) => this.handleOnChange(event)} name="status" type="text"/><br/>
          <b><input type="submit" /></b>
        </form><br />
      <h6>Click on the View Current Aspirations tab to See Your Current Dreams!</h6><br></br>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return ({aspirations: state.aspirations})
}

const mapDispatchToProps = dispatch => ({
  createAspiration: aspiration => dispatch(createAspiration(aspiration))
})

export default connect(mapStateToProps, mapDispatchToProps)(AspirationInput);
