import React, { Component } from 'react';
import '../styles/Home.css';

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

          {/* <a><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >Test 1</Link></a> */}

          </div>
      </div>
      
    );
  }
}

export default Home;
