import React, { Component } from 'react';
import Aspiration from './Aspiration';
import { connect } from 'react-redux';
import { fetchAspirations, deleteAspirations } from './aspirationsActions';


class Aspirations extends Component {

  componentDidMount() {
    this.props.fetchAspirations()
  }



  render() {
    return (
      <div>
        {this.props.aspirations.map((aspiration) => {
          return (

            <Aspiration
            key={aspiration.id}
            aspiration={aspiration}
            deleteAspirations={deleteAspirations}
        />
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { aspirations: state.aspirations }
}

export default connect(mapStateToProps, { fetchAspirations, deleteAspirations })(Aspirations);
