import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createQuote } from '../actions/quoteActions'


class QuoteInput extends Component {

//create two separate forms
//on aspiration form, have a select to choose a preexisting dreamer
//toggle form under individual dreamer

    state = {
      author: '',
      content: ''

    };


  handleOnChange = event => {

    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const quote = this.state
    this.props.createQuote(quote)
    this.setState({
      author: '',
      content: ''
    });
    return ( <div>Quote Created!</div> )
  }

  render() {
    return (
      <div>
        <label>Add a New Quote!</label>
        <form onSubmit={(event) => this.handleOnSubmit(event)} >
          <input placeholder="Author" value={this.state.author} onChange={(event) => this.handleOnChange(event)} name="author" type="text"/><br/>
          <input placeholder="Content" value={this.state.content} onChange={(event) => this.handleOnChange(event)} name="content" type="text"/><br/>
          <b><input type="submit" /></b>
        </form><br />
      <h6>Click on the View Current Quotes tab to See Your Current Quotes!</h6><br></br>
      </div>
    );
  }
};

// const mapStateToProps = state => {
//   return ({quotes: state.quotes})
// }

const mapDispatchToProps = dispatch => ({
  createQuote: (quote) => dispatch(createQuote(quote))
})

export default connect(null, mapDispatchToProps)(QuoteInput);
