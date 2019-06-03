import React, { Component } from 'react';
import '../styles/Home.css';
import '../styles/App.css';

// import scrollToComponent from 'react-scroll-to-component';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-text">
          <h1 className="first">
            HELLO!
          </h1>

          <h1 className="second">
            my name is
          </h1>

          <h1 className="name">PATRICE DOUGÉ</h1>

          <p className="about">
          I design and develop beautiful, responsive websites.
            <br />
          Currently I am a Web Developer Intern at Rochester Regional Health,
            <br />
          in my senior year of college at the Univeristy of Rochester.
          </p>

          </div>

          <div className="chevron"></div>
      </div>
      
    );
  }
}

export default Home;
