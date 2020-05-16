import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createDreamer, fetchDreamer } from '../actions/DreamerActions'
import Dreamers from '../components/Dreamers';




class DreamersContainer extends Component {

  componentDidMount() {
    this.props.fetchDreamer()
  }

  render() {
     console.log(this.props)
    return(
      <div>

        <Dreamers />

      </div>
    )
  }
}



export default connect(null, {createDreamer, fetchDreamer} )(DreamersContainer)
