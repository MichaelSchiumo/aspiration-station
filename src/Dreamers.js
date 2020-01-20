import React, { Component } from 'react';
import Dreamer from './Dreamer';
import { connect } from 'react-redux';
import { fetchDreamer } from './DreamerActions';



class Aspirations extends Component {

  componentDidMount() {
    this.props.fetchDreamer()
  }



  render() {
    return (
      <div>

        {this.props.dreamers.map((dreamer) => {
          return (

            <Dreamer
            key={dreamer.id}
            dreamer={dreamer}
        />
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { dreamers: state.dreamers }
}

export default connect(mapStateToProps, { fetchDreamer })(Dreams);
// export default connect(null, { fetchAspirations, deleteAspirations })(Aspirations);
