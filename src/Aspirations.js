import React, { Component } from 'react';
import Aspiration from './Aspiration';

class Aspirations extends Component {

  render() {
    const { aspirations, deleteAspiration, addAspiration} = this.props;
    const aspirationList = aspirations.map(aspiration => {
      return (
        <Aspiration key={aspiration.id} aspiration={aspiration} deleteAspiration={deleteAspiration} />
      )
    })

    return(
      <div>
        <ul>
          {aspirationList}
        </ul>
      <div>

        </div>
      </div>
    )
  }
}

export default Aspirations;
