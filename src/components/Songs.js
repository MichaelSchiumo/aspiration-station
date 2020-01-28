import React, { Component } from 'react';
import Song from './Song';
import { connect } from 'react-redux';
import { fetchSongs, deleteSongs } from '../actions/songActions';



class Songs extends Component {

  // componentDidMount() {
  //   this.props.fetchQuotes()
  // }



  render() {
    console.log(this.props)
    console.log(this.state)
    return (

      <div>Test</div>

      // <div>
      //   {(this.props.songs.length !== 1) ?
      //      <h3>You have {this.props.songs.length} songs!</h3>
      //                             :
      //      <h3>You have {this.props.songs.length} song!</h3>
      //
      //   }
      //
      //   {(this.props.songs.length !== 0) ?
      //     <h5>Click the white box below to remove a song.</h5>
      //                             :
      //                             <div></div>
      //   }
      //
      //   {this.props.songs.map((song) => {
      //     return (
      //
      //       <Song
      //       key={song.id}
      //       song={song}
      //       deleteSongs={this.props.deleteSongs}
      //   />
      //
      //     )
      //   })}
      // </div>

    )
  }




}

const mapStateToProps = state => {
  return { songs: state.songs}
}

export default connect(mapStateToProps, { fetchSongs, deleteSongs })(Songs);
// export default connect(null, { fetchAspirations, deleteAspirations })(Aspirations);
