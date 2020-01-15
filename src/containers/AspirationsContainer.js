import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aspirations from '../components/aspirations.js';

class AspirationsContainer extends Component {


  render() {
    return(
      <div>
        <Aspirations />
      </div>
    )
  }
}

const mapStateToProps = state => ({ aspirations: state.aspirations })

const mapDispatchToProps = dispatch => ({
  addAspiration: title => dispatch({type: 'ADD_ASPIRATION', title}),
  deleteAspiration: id => dispatch({type: 'DELETE_ASPIRATION', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(AspirationsContainer)
