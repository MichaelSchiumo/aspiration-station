import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
// import { FaAlignRight } from 'react-icons/fa'
import '../App.css';
import Dreamers from './Dreamers'
import DreamerInput from '../forms/DreamerInput'


class Navbar extends Component {


  render() {
    const {currentUser} = this.props


    return(
      <div className="NavBar">
        <h1><NavLink className="Nav-Link" style={{ marginRight: '10px' }} to="/">Welcome to Aspiration Station!</NavLink></h1>
          <img src="https://cdn.dribbble.com/users/184036/screenshots/1164252/a-logo.jpg" />
            <h3><NavLink className="Nav-Link" style={{ marginCenter: '10px' }} to="/about">Get Started</NavLink></h3>


          <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
            <h3>
               <NavLink className="Nav-Link" style={{ marginRight: '10px' }} to="/aspirations">View Current Aspirations</NavLink>
               <NavLink className="Nav-Link" style={{ marginLeft: '10px' }} to="/aspirations/new">Create New Aspirations</NavLink>
              {(this.props.dreamers.length < 1) ? <NavLink className="Nav-Link" style={{ marginLeft: '10px' }} to="/dreamers/new">Create Dreamer Profile</NavLink> : ''}
               <NavLink className="Nav-Link" style={{ marginLeft: '10px' }} to="/dreamers">View Dreamer Profile</NavLink>

             </h3>
          </div>
        </div>)
    }
}

const mapStateToProps = state => {
  return {dreamers: state.dreamers}
}

export default connect(mapStateToProps)(Navbar);

//connect components to state with users (store with current user)
//map current user to navlink
//do conditional logic

{/* <NavLink className="Nav-Link" style={{ marginLeft: '10px' }} to="/dreamers/new">Create Dreamer Profile</NavLink> */}
