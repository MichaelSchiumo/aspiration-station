import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aspirations from './Aspirations'
import AspirationInput from './AspirationInput'



class AspirationsContainer extends Component {


  render() {
    return(
      <div>
        <Aspirations />
        <AspirationInput addAspiration={this.props.addAspiration} />
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
