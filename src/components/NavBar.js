import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
// import { FaAlignRight } from 'react-icons/fa'
import '../App.css';
import DreamersContainer from '../containers/DreamersContainer'
// import DreamerInput from '../forms/DreamerInput'
// import QuoteInput from '../forms/QuoteInput'


class Navbar extends Component {


  render() {
    // const {currentUser, aspirations} = this.props



    return(
      <div className="NavBar">
        <h1><NavLink className="Nav-Link" style={{ marginCenter: '10px' }} to="/">Welcome to Aspiration Station!</NavLink></h1><br />
        <h2><NavLink className="Nav-Link" style={{ marginCenter: '10px' }} to="/inspo">#Inspo</NavLink></h2>
          <img src="https://cdn.dribbble.com/users/184036/screenshots/1164252/a-logo.jpg" />
          <h3><NavLink className="Nav-Link" style={{ marginCenter: '10px' }} to="/about">Get Started</NavLink></h3>




          <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
            <h3>

               {(this.props.aspirations.length > 0) ? <NavLink className="Nav-Link" style={{ marginRight: '10px' }} to="/aspirations">View Current Aspirations</NavLink> : ''}
               {(this.props.dreamers.length > 0) ? <NavLink className="Nav-Link" style={{ marginLeft: '10px' }} to="/aspirations/new">Create New Aspirations</NavLink> : ''}
              {(this.props.dreamers.length < 1) ? <NavLink className="Nav-Link" style={{ marginLeft: '10px' }} to="/dreamers/new">Create Dreamer Profile</NavLink> : ''}
               {(this.props.dreamers.length > 0) ? <NavLink className="Nav-Link" style={{ marginLeft: '10px' }} to="/dreamers">View Dreamer Profile</NavLink> : ''}
               {(this.props.dreamers.length > 0) ? <NavLink className="Nav-Link" style={{ marginLeft: '10px' }} to="/quotes/new">Create Quotes</NavLink> : ''}
              {(this.props.quotes.length > 0) ? <NavLink className="Nav-Link" style={{ marginLeft: '10px' }} to="/quotes">View Current Quotes</NavLink> : ''}
             </h3>
          </div>
        </div>)
    }
}

const mapStateToProps = state => {
  return {dreamers: state.dreamers,
    aspirations: state.aspirations,
    quotes: state.quotes
  }
}

export default connect(mapStateToProps)(Navbar);
