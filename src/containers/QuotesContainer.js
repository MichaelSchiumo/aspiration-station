import React, { Component } from 'react';
import { connect } from 'react-redux';
import Quotes from '../components/Quotes'
import { createQuote } from '../actions/quoteActions'



class QuotesContainer extends Component {


  render() {

    return(
      <div>
        <Quotes />

      </div>
    )
  }
}



export default connect(null, {createQuote} )(QuotesContainer)
