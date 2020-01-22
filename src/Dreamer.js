import React, { Component } from 'react';
import DreamerInput from './DreamerInput'

class Dreamer extends Component {



render() {
  const { dreamer } = this.props;
  console.log(this.props)


//add ternary for current user logic
//if current user, render profile
//if not, render input form
//add delete functionality? if time


  return (
    <div>
      {dreamer}
    </div>
  );
}

}


export default Dreamer;
