import React, { Component } from 'react';

class Aspiration extends Component {
  handleOnClick = (event) => {
    console.log('delete aspiration handle submit');
    this.props.deleteAspirations(this.props.aspiration);
  };

  // this.props.deleteAspirations(this.props.aspiration, this.props.history);

  render() {
    const { aspiration, deleteAspirations } = this.props;
    console.log('aspiration render');
    return (
      <div style={aspirationStyle}>
        <div className='card' key={aspiration.id}>
          <br />
          <h2>{aspiration.title}</h2>
          <b>
            <label>Category</label>
          </b>
          <i>
            <p>{aspiration.category}</p>
          </i>
          <b>
            <label>Timeframe</label>
          </b>
          <i>
            <p>{aspiration.timeframe} days</p>
          </i>
          <b>
            <label>Status</label>
          </b>
          <i>
            <p>{aspiration.status}</p>
          </i>
          <br />
          <button onClick={this.handleOnClick}></button>
        </div>
      </div>
    );
  }
}

const aspirationStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1 rem',
};

export default Aspiration;

// rerender using history
//pass down history
//history comes from component with routes

//create navbar
