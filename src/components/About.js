import React, { Component } from 'react';

class About extends Component {
  //add Welcome Current User


  render() {
    return(
    <div>
      <h1>Welcome to Aspiration Station!</h1>
        <center><h2>Here, you can create and track your goals and aspirations.</h2></center><br />
          <div>
            <center><h2>Step 1:</h2></center>
            <b><u><h4>Create Your Dreamer Profile:</h4></u></b>
              <div className='square-content'><br />
                <i><b><center>~ Name </center></b></i><br />
                <i><b><center>~ Age </center></b></i><br />
                <i><b><center>~ You're still going strong!</center></b></i><br />
              </div>
            <center><h2>Step 2:</h2></center>
            <b><u><h4>Create Goals in Different Categories:</h4></u></b>
              <div className='square-content'><br />
                <i><b><center>~ Personal</center></b></i><br />
                <i><b><center>~ Educational</center></b></i><br />
                <i><b><center>~ Health</center></b></i><br />
                <i><b><center>~ Professional</center></b></i><br />
              </div>
              <center><h2>Step 3:</h2></center>
              <b><u><h4>Add Details To Craft Unique Aspirations:</h4></u></b>
                <div className='square-content'><br />
                  <b><i><center>~ Category</center></i></b><br />
                  <b><i><center>~ Hours Per Week</center></i></b><br />
                  <b><i><center>~ Status</center></i></b><br />
                </div>
              <div>
                <center><h2>Step 4:</h2></center>
                <u><h4> Keep Yourself On Track:</h4></u>
                  <div className='square-content'><br />
                    <i><b><center>~ Playlists</center></b></i><br />
                    <i><b><center>~ Quotes</center></b></i><br />
                    <i><b><center>~ Inspirational Books</center></b></i><br />
                  </div>
              </div>
          </div><br />
        <h2>Click 'Create Dreamer Profile' Above To Get Started!</h2>
      </div>
    )
  }
}

export default About;
