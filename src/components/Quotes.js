import React, { Component } from 'react';
import Quote from './Quote';
import { connect } from 'react-redux';
import { fetchQuotes, deleteQuotes } from '../actions/quoteActions';



class Quotes extends Component {

  componentDidMount() {
    this.props.fetchQuotes()
  }



  render() {
    return (

      <div>Test</div>

          )
        }




}

const mapStateToProps = state => {
  return { quotes: state.quotes}
}

export default connect(mapStateToProps, { fetchQuotes, deleteQuotes })(Quotes);
// export default connect(null, { fetchAspirations, deleteAspirations })(Aspirations);
