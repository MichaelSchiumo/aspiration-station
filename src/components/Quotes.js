import React, { Component } from 'react';
import Quote from './Quote';
import { connect } from 'react-redux';
import { fetchQuotes, deleteQuotes } from '../actions/quoteActions';



class Quotes extends Component {

  


  render() {
    return (

      <div>
        {(this.props.quotes.length !== 1) ?
           <h3>You have {this.props.quotes.length} quotes!</h3>
                                  :
           <h3>You have {this.props.quotes.length} quote!</h3>

        }

        {(this.props.quotes.length !== 0) ?
          <h5>Click the white box below to remove a quote.</h5>
                                  :
                                  <div></div>
        }

        {this.props.quotes.map((quote) => {
          return (

            <Quote
            key={quote.id}
            quote={quote}
            deleteQuotes={this.props.deleteQuotes}
        />

          )
        })}
      </div>

    )
  }




}

const mapStateToProps = state => {
  return { quotes: state.quotes}
}

export default connect(mapStateToProps, { fetchQuotes, deleteQuotes })(Quotes);
// export default connect(null, { fetchAspirations, deleteAspirations })(Aspirations);
