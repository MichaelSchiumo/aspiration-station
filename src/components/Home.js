import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  //add Welcome Current User






    render(){

    return(

      <div>

          <i><b><p>"I have not failed. I've just found 10,000 ways that won't work."</p></b></i>
          <p>-Thomas Edison</p>

          <div className="container-color">
            <div className="cell cell-1">
              <a href='https://www.youtube.com/watch?v=eWynt87PaJ0'>The Audacity of Hope</a>
              <img src='https://www.gannett-cdn.com/-mm-/d4a71030510b8c8a5c4f84c485eea53e37e522be/c=199-0-3306-2336&r=x408&c=540x405/local/-/media/2016/07/19/USATODAY/USATODAY/636045342064044880-XXX-DNC-DNC-7-27-TD553.JPG'></img>
          </div>


          <div className="cell cell-2">
            <a href='https://www.youtube.com/watch?v=Bg_Q7KYWG1g'>Third Grade Dropout</a>
            <img src='https://i.ytimg.com/vi/c3kbmNhY06c/hqdefault.jpg'></img>

          </div>
          
        </div>
      </div>


     )
   }


}

export default Home;
