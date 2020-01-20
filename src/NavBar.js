import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa'
import './App.css';



class Navbar extends Component {

  render() {
  return (

    <div className="NavBar">
      <h1><NavLink className="Nav-Link" style={{ marginRight: '10px' }} to="/">Welcome to Aspiration Station!</NavLink></h1>


    <img src="https://cdn.dribbble.com/users/184036/screenshots/1164252/a-logo.jpg" />

        <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
          <h2>
             <NavLink className="Nav-Link" style={{ marginRight: '10px' }} to="/aspirations">View Current Aspirations</NavLink>
             <NavLink className="Nav-Link" style={{ marginLeft: '10px' }} to="/aspirations/new">Create New Aspirations</NavLink>
             <NavLink className="Nav-Link" style={{ marginLeft: '10px' }} to="/dreamer">Dreamer Profile</NavLink>
           </h2>
        </div>
      </div>

    )
}
}



export default Navbar;
