import React, { Component } from 'react';
import '../styles/Home.css';
import '../styles/App.css';
import { Router, Link } from "@reach/router";

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
          I design and develop <a href="">websites</a>, love taking <a href="">pictures</a>,
            <br />
          and enjoy <a href="">writting</a> about a variety of subjects.
            <br />
          Scroll down to learn more about what I do.
          </p>

        </div>

          <div className="chevron"></div>
      </div>
      
    );
  }
}

export default Home;
