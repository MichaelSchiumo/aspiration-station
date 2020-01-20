import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';




const Navbar = ({ currentUser }) => {
  return (

    <div className="NavBar">
      <h1>Welcome To Aspiration Station</h1>

        <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
          <h2>
             <NavLink className="Nav-Link" style={{ marginRight: '10px' }} to="/aspirations">View Current Aspirations</NavLink>
             or
             <NavLink className="Nav-Link" style={{ marginLeft: '10px' }} to="/aspirations/new">Create New Aspirations</NavLink>
           </h2>
        </div>
      </div>

    )
}



export default Navbar;
