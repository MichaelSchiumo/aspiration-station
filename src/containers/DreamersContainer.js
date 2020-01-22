import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Aspirations from './Aspirations'
import { createDreamer } from '../actions/DreamerActions'
// import DreamerInput from '../forms/DreamerInput'
// import Dreamer from '../components/Dreamer'
import Dreamers from '../components/Dreamers'



class DreamersContainer extends Component {


  render() {
     console.log(this.props)
    return(
      <div>

        <Dreamers />

      </div>
    )
  }
}



export default connect(null, {createDreamer} )(DreamersContainer)

//connect connects React components to Redux functionality
//get rid of Redux (refactor)
//we have access to the aspirations component through import at the top of this file
