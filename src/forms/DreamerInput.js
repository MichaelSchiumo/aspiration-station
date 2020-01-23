import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createDreamer, fetchDreamer } from '../actions/DreamerActions'


class DreamerInput extends Component {



    state = {
      name: '',
      age: '',
      sex: ''

    };

    componentDidMount() {
      console.log("test",this.props)
      this.props.fetchDreamer()
    }

  handleOnChange = event => {

    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const dreamer = this.state
    const foundDreamer = this.props.dreamer.find(name => this.state.name === name )
    if (foundDreamer) {
      console.log(foundDreamer)
    } else {
        this.props.createDreamer(dreamer)
    }
    
    this.setState({
      name: '',
      age: '',
      sex: ''

    });
  }

  render() {
    return (
      <div>
        <label>Create Your Profile!</label>
        <form onSubmit={(event) => this.handleOnSubmit(event)} >
          <input placeholder="Name" value={this.state.name} onChange={(event) => this.handleOnChange(event)} name="name" type="text"/><br/>
          <input placeholder="Age" value={this.state.age} onChange={(event) => this.handleOnChange(event)} name="age" type="text"/><br/>
          <input placeholder="Sex" value={this.state.sex} onChange={(event) => this.handleOnChange(event)} name="sex" type="text"/><br />
          <b><input type="submit" /></b>
        </form>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return ({dreamers: state.dreamers})
}

const mapDispatchToProps = dispatch => ({
  createDreamer: dreamer => dispatch(createDreamer(dreamer)),
  fetchDreamer: dreamer => dispatch(fetchDreamer())
})

export default connect(mapStateToProps, mapDispatchToProps)(DreamerInput);
