import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aspirations from '../components/Aspirations'
import { createAspiration } from '../actions/aspirationsActions'
import NavBar from '../components/NavBar';
import Home from '../components/Home';



class AspirationsContainer extends Component {


  render() {

    return(
      <div>
        <Aspirations />

      </div>
    )
  }
}



export default connect(null, {createAspiration} )(AspirationsContainer)
