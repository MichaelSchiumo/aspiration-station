import React, { Component } from 'react';
import Dreamer from './Dreamer';
import { connect } from 'react-redux';
import { fetchDreamer } from './DreamerActions';



class Dreamers extends Component {

  componentDidMount() {

    this.props.fetchDreamer()
  }



  render() {
    return ( <div>hi</div>
      // <div>
      //
      //   // {this.props.dreamers.map((dreamer) => {
      //   //   return (
      //   //
      //   //     <Dreamer
      //   //     key={dreamer.id}
      //   //     dreamer={dreamer}
      //   // />
      //   //   )
      //   // })}
      // </div>
    )
  }
}

const mapStateToProps = state => {
  return { dreamers: state.dreamers }
}

export default connect(mapStateToProps, { fetchDreamer })(Dreamers);
// export default connect(null, { fetchAspirations, deleteAspirations })(Aspirations);
