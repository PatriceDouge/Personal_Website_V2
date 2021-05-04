import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "../styles/App.css";
import "../styles/Blog3.css";

class Blog3 extends Component {
  render() {
    return (
      <div className="blog3">
        <div className="logo">
          <Link to="/">
            <img src={require("../assets/images/logo.jpg")} alt="logo" />
          </Link>
        </div>
        <h1 className="bold">Coding Interview Crash Course: The Must - Know</h1>
        <p className="date"> 14 November 2019 </p>
        <p className="bold" id="intro">
          Introduction
        </p>
      </div>
    );
  }
}

export default Blog3;
