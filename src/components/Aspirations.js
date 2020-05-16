import React, { Component } from 'react';
import Aspiration from './Aspiration';
import { connect } from 'react-redux';
import { fetchAspirations, deleteAspirations } from '../actions/aspirationsActions';


class Aspirations extends Component {

  componentDidMount() {
    this.props.fetchAspirations()
  }



  render() {
    return (

      <div>
        {(this.props.aspirations.length !== 1) ?
           <h3>You have {this.props.aspirations.length} aspirations!</h3>
                                  :
           <h3>You have {this.props.aspirations.length} aspiration!</h3>

        }

        {(this.props.aspirations.length !== 0) ?
          <h5>Click the white box below to remove an aspiration.</h5>
                                  :
                                  <div></div>
        }

        {this.props.aspirations.map((aspiration) => {
          return (

            <Aspiration
            key={aspiration.id}
            aspiration={aspiration}
            deleteAspirations={this.props.deleteAspirations}
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
// export default connect(null, { fetchAspirations, deleteAspirations })(Aspirations);
