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
    const currentUser = this.props.dreamers.filter(id => dreamers.id === this.props.id)
    const filteredDreamers = dreamers.filter(id => dreamers.id === this.props.id)
    console.log(dreamers)
    return (

      <div>
        {filteredDreamers.map((dreamer) => {
          return (

              <div class="w3-card-4">

              <header class="w3-container w3-light-grey">
                <h3>John Doe</h3>
              </header>

              <div class="w3-container">
                <p>1 new friend request</p>


                <p>President/CEO at Mighty Schools...</p>
              </div>

              <button class="w3-button w3-block w3-dark-grey">+ Connect</button>

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
