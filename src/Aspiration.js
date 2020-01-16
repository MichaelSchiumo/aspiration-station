import React, { Component } from 'react';
import { CREATE_ASPIRATION } from './aspirationsActions'



const Aspiration = props => {

  return (
  <div>
    
    {console.log(props)}
      {props.aspiration.attributes.title}
  </div>

)
}

export default Aspiration;
