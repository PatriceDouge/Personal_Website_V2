import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import {animateScroll as scroll } from "react-scroll";

import '../styles/Home.css';
import '../styles/App.css';

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
          I design and develop <a href="">websites</a>, love taking <Link to="/photography">pictures</Link><a href=""></a>,
            <br />
          and enjoy <Link to="/blog">writting</Link> about a variety of subjects.
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
