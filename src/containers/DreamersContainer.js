import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Aspirations from './Aspirations'
import { createDreamer, fetchDreamer } from '../actions/DreamerActions'
// import DreamerInput from '../forms/DreamerInput'
// import Dreamer from '../components/Dreamer'
import Dreamers from '../components/Dreamers'
import Home from '../components/Home';




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
