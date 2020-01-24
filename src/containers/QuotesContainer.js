import React, { Component } from 'react';
import { connect } from 'react-redux';
import Quotes from '../components/Quotes'
import { createQuote } from '../actions/quoteActions'
import Home from '../components/Home';
// import Quotes from '../components/Quotes'



class QuotesContainer extends Component {

  componentDidMount() {
    this.props.fetchQuotes()
  }

  render() {

    return(
      <div>
        <Quotes />

      </div>
    )
  }
}



export default connect(null, {createQuote} )(QuotesContainer)
