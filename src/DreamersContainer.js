import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Aspirations from './Aspirations'
import { createDreamer } from './DreamerActions'
import DreamerInput from './DreamerInput'
import Dreamer from './Dreamer'



class DreamersContainer extends Component {


  render() {

    return(
      <div>
        
        <DreamerInput />

      </div>
    )
  }
}



export default connect(null, {createDreamer} )(DreamersContainer)

//connect connects React components to Redux functionality
//get rid of Redux (refactor)
//we have access to the aspirations component through import at the top of this file
