import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aspirations from './Aspirations'
import { createAspiration } from './aspirationsActions'



class AspirationsContainer extends Component {


  render() {

    return(
      <div>
        <Aspirations />

      </div>
    )
  }
}

// const mapStateToProps = state => ({ aspirations: state.aspirations })

// const mapDispatchToProps = dispatch => ({
//   // addAspiration: aspiration => dispatch({type: 'ADD_ASPIRATION', aspiration}),
//   
//   deleteAspiration: id => dispatch({type: 'DELETE_ASPIRATION', id})
// })


export default connect(null, {createAspiration} )(AspirationsContainer)

//connect connects React components to Redux functionality
//get rid of Redux (refactor)
//we have access to the aspirations component through import at the top of this file
