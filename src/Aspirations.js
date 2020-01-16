import React, { Component } from 'react';
import Aspiration from './Aspiration';
import { connect } from 'react-redux';
import { fetchAspirations } from './aspirationsActions';
// import { deleteAspiration } from './'

class Aspirations extends Component {

  componentDidMount() {
    this.props.fetchAspirations()
  }

  render() {
    // const { aspirations, deleteAspiration, createAspiration} = this.props;
    // const aspirationList = aspirations.map(aspiration => {
    //   console.log(aspirations)
    // //   return (
    // //     <Aspiration key={aspiration.id} aspiration={aspiration} deleteAspiration={deleteAspiration} />
    // //   )
    // })




    return(
      <div>
        <ul>
          {console.log(this.props)}
          {this.props.aspirations.aspirations.map(aspiration =>
            <div>
              <div class="card" key={aspiration.id}>
                <h2>{aspiration.attributes.title}</h2>
                <b><label>Category</label></b>
                <i><p>{aspiration.attributes.category}</p></i>
                <b><label>Timeframe</label></b>
                <i><p>{aspiration.attributes.timeframe} days</p></i>
                <b><label>Status</label></b>
                <i><p>{aspiration.attributes.status}</p></i>
              </div>
            </div>
          )}
        </ul>
      <div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { aspirations: state.aspirations }
}

export default connect(mapStateToProps, { fetchAspirations })(Aspirations);
