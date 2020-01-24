import React, { Component } from 'react';
// import Dreamer from './Dreamer';
import { connect } from 'react-redux';
import { fetchDreamer } from '../actions/DreamerActions.js';
import NavBar from './NavBar'

class Dreamers extends Component {

  componentDidMount() {
    this.props.fetchDreamer()
  }


  render() {

    const dreamers = this.props.dreamers
    const currentUser = this.props.dreamers[0]
    const filteredDreamers = dreamers.filter(dreamer => dreamer.id === this.props.id)
    console.log(this.props.id)
    return (
      <div>

        //access through index value
        {filteredDreamers.map((dreamer) => {
          return (

              <div key={dreamer.id} class="w3-card-4">

              <header class="w3-container w3-light-grey">
                <u><i><h1 style={{textTransform: 'capitalize'}}>{dreamer.name}</h1></i></u>
              </header>

              <div class="w3-container">
                <h2>{dreamer.age} years and still going strong!</h2>


                <p>Passion?</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}


const mapStateToProps = state => {
  return { dreamers: state.dreamers }
}

export default connect(mapStateToProps, { fetchDreamer })(Dreamers);
// export default connect(null, { fetchAspirations, deleteAspirations })(Aspirations);
