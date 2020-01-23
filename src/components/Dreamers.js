import React, { Component } from 'react';
// import Dreamer from './Dreamer';
import { connect } from 'react-redux';
import { fetchDreamer } from '../actions/DreamerActions.js';
import NavBar from './NavBar'



class Dreamers extends Component {

  componentShouldMount() {
    this.props.fetchDreamer()
  }



  render() {

    const dreamers = this.props.dreamers
    const currentUser = this.props.dreamers.filter(id => dreamers.id === this.props.id)
    const filteredDreamers = dreamers.filter(id => dreamers.id === this.props.id)
    console.log(filteredDreamers)
    return (

      <div>
        {filteredDreamers.map((dreamer) => {
          return (
            <div><li>{dreamer.attributes.name}</li></div>
          )
        })}
      </div>

    )
  }
}

const mapStateToProps = state => {
  return { dreamers: state.dreamers }
}

export default connect(mapStateToProps, { fetchDreamer })(Dreamers);
// export default connect(null, { fetchAspirations, deleteAspirations })(Aspirations);
