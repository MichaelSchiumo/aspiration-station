import React, { Component } from 'react';
import Aspiration from './Aspiration';

class Aspirations extends Component {

  render() {
    const { aspirations, deleteAspiration, addAspiration} = this.props;

    return(
      <div>
        <div>Is this working?</div>
        <Aspiration />
      <div>

        </div>
      </div>
    )
  }
}

export default Aspirations;
