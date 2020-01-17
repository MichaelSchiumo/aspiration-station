import React, { Component } from 'react';

class Aspiration extends Component {

  handleOnClick() {
    debugger
  this.props.deleteAspirations(this.props.aspiration.id);
}


render() {
  const { aspiration, deleteAspirations } = this.props;

  return (
    <div>
      <div>
        <div className="card" key={aspiration.id}>
          <h2>{aspiration.title}</h2>
          <b><label>Category</label></b>
          <i><p>{aspiration.category}</p></i>
          <b><label>Timeframe</label></b>
          <i><p>{aspiration.timeframe} days</p></i>
          <b><label>Status</label></b>
          <i><p>{aspiration.status}</p></i>
        </div>
        <button onClick={this.handleOnClick}></button>
      </div>
    </div>
  );
}

}


export default Aspiration;
