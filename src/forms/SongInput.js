// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { createSong } from '../actions/songActions'
//
//
// class SongInput extends Component {
//
// //create two separate forms
// //on aspiration form, have a select to choose a preexisting dreamer
// //toggle form under individual dreamer
//
//     state = {
//       title: '',
//       artist: '',
//       genre: ''
//
//     };
//
//
//   handleOnChange = event => {
//
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   }
//
//   handleOnSubmit = event => {
//
//     event.preventDefault();
//     const song = this.state
//     this.props.createSong(song)
//     this.setState({
//       title: '',
//       artist: '',
//       genre: ''
//     });
//     debugger
//     return ( <div>Song Created!</div> )
//   }
//
//   render() {
//     return (
//       <div>
//         <label>Add a New Song!</label>
//         <form onSubmit={(event) => this.handleOnSubmit(event)} >
//           <input placeholder="Artist" value={this.state.author} onChange={(event) => this.handleOnChange(event)} name="artist" type="text"/><br/>
//           <input placeholder="Title" value={this.state.content} onChange={(event) => this.handleOnChange(event)} name="title" type="text"/><br/>
//           <input placeholder="Genre" value={this.state.content} onChange={(event) => this.handleOnChange(event)} name="genre" type="text"/><br/>
//           <b><input type="submit" /></b>
//         </form><br />
//       <h6>Click on the View Current Songs tab to See Your Current Songs!</h6><br></br>
//       </div>
//     );
//   }
// };
//
//
// const mapDispatchToProps = dispatch => ({
//   createSong: (song) => dispatch(createSong(song))
// })
//
// export default connect(null, mapDispatchToProps)(SongInput);
