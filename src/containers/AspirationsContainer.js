import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aspirations from '../components/Aspirations'
import { createAspiration } from '../actions/aspirationsActions'



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

//connect connects React components to Redux functionality
//get rid of Redux (refactor)
//we have access to the aspirations component through import at the top of this file
