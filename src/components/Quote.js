import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { deleteAspirations } from '../actions/aspirationsActions'

class Quote extends Component {

  handleOnClick = event => {

  this.props.deleteQuotes(this.props.quote);
}

// this.props.deleteAspirations(this.props.aspiration, this.props.history);

render() {
  const { quote, deleteQuotes } = this.props;
  console.log(this.props)

  return (
    <div>

        <div className="card" key={quote.id}>
          <u>
            <br />
            <h2>{quote.author}</h2>
          </u>
          <i>
            <p>{quote.content}</p>
          </i>
          <button onClick={this.handleOnClick}></button>
        </div>

    </div>
  );
}

}


export default Quote;
