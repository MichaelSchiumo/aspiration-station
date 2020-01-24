import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Aspirations from './Aspirations'
import { createDreamer, fetchDreamer } from '../actions/DreamerActions'
// import DreamerInput from '../forms/DreamerInput'
// import Dreamer from '../components/Dreamer'
import Dreamers from '../components/Dreamers'




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

const mapStateToProps = state => {
  console.log(state)
}

export default connect(mapStateToProps, {createDreamer, fetchDreamer} )(DreamersContainer)

//connect links to Reducer
//gives action functions ability to dispatch function (render) by calling fetch
//createDreamer is being stored in props
//only the function in the properties is going to be able to dispatch

//connect connects React components to Redux functionality
//get rid of Redux (refactor)
//we have access to the aspirations component through import at the top of this file
