import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { deleteAspirations } from './aspirationsActions'

class Aspiration extends Component {

  handleOnClick = event => {

  this.props.deleteAspirations(this.props.aspiration);
}

// this.props.deleteAspirations(this.props.aspiration, this.props.history);

render() {
  const { aspiration, deleteAspirations } = this.props;

  return (
    <div>
      
      <div>
        <div className="card" key={aspiration.id}>
          <br /><h2>{aspiration.title}</h2>
          <b><label>Category</label></b>
          <i><p>{aspiration.category}</p></i>
          <b><label>Timeframe</label></b>
          <i><p>{aspiration.timeframe} days</p></i>
          <b><label>Status</label></b>
          <i><p>{aspiration.status}</p></i><br />
        </div>
        <button onClick={(event) => this.handleOnClick(event)}></button>
      </div>
    </div>
  );
}

}


export default Aspiration;

// rerender using history
//pass down history
//history comes from component with routes


//create navbar
