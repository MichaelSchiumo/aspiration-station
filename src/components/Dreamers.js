import React, { Component } from 'react';
// import Dreamer from './Dreamer';
import { connect } from 'react-redux';
// import { fetchDreamer } from '../actions/DreamerActions.js';
import NavBar from './NavBar'

class Dreamers extends Component {




  render() {

    const dreamers = this.props.dreamers
    const currentDreamer = this.props.dreamers[0]
    // const filteredDreamers = dreamers.filter(dreamer => dreamer.id === this.props.id)
    console.log(this.props)
    return (

      <div>
              <div key={currentDreamer.id} className="w3-card-4">

              <header className="w3-container w3-light-grey">
                <u><i><h1 style={{textTransform: 'capitalize'}}>{currentDreamer.name}</h1></i></u>
              </header>

              <div className="w3-container">
                <h2>{currentDreamer.age} years and still going strong!</h2>


                
              </div>
            </div>


      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return { currentDreamer: state.currentDreamer}
// }

const mapStateToProps = state => {
  return { dreamers: state.dreamers }
}

export default connect(mapStateToProps)(Dreamers);
// export default connect(null, { fetchAspirations, deleteAspirations })(Aspirations);
