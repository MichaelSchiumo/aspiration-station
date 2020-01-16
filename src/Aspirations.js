import React, { Component } from 'react';
import Aspiration from './Aspiration';
import { connect } from 'react-redux';
import { fetchAspirations } from './aspirationsActions';
// import { deleteAspiration } from './'

class Aspirations extends Component {

  componentDidMount() {
    this.props.fetchAspirations()
  }

  render() {
    const { aspirations, deleteAspiration, createAspiration} = this.props;
    const aspirationList = aspirations.map(aspiration => {
      console.log(aspirations)
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

const mapStateToProps = state => {
  return { aspirations: state.aspirations }
}

export default connect(mapStateToProps, { fetchAspirations })(Aspirations);
