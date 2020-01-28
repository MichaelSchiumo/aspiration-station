import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { deleteAspirations } from '../actions/aspirationsActions'

class Song extends Component {

  handleOnClick = event => {

  this.props.deleteSongs(this.props.song);
}

// this.props.deleteAspirations(this.props.aspiration, this.props.history);

render() {
  const { song, deleteSongs } = this.props;
  console.log(this.props)


  return <div>hi</div>

  // return (
  //   <div>
  //
  //       <div className="card" key={song.id}>
  //         <u><br /><h2>{song.artist}</h2></u>
  //         <i><p>{song.title}</p></i>
  //         <i><p>{song.genre}</p></i>
  //         <button onClick={this.handleOnClick}></button>
  //       </div>
  //
  //   </div>
  // );
}

}


export default Song;

// rerender using history
//pass down history
//history comes from component with routes


//create navbar
