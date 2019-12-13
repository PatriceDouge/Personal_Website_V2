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
        <p className="date"> 1 November 2019 </p>
        <p className="bold"> Table of Contents: </p>
        <ol>
          <li>
            <HashLink smooth to="#intro">
              Intro
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#bigo">
              Big O
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#array_strings">
              Arrays & Strings
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#linkedlists">
              Linked Lists
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#intro">
              Stacks & Queues
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#intro">
              Trees and Graphs
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#intro">
              Binary(Bit Manipulation)
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#intro">
              Math & Logic
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#intro">
              Recursion
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#intro">
              Dynamic Programming
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#intro">
              Sorting & Searching
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#intro">
              System Design
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#intro">
              Testing
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#intro">
              Useful Resources
            </HashLink>
          </li>
        </ol>
        <p className="bold" id="intro">
          Introduction
        </p>
        <p> </p>
        <p className="bold" id="intro">
          Big O
        </p>
        <p> </p>
        <p className="bold" id="intro">
          Arrays & Strings
        </p>
        <p> </p>
        <p className="bold" id="intro">
          Linked Lists
        </p>
        <p> </p>
        <p className="bold" id="intro">
          Stacks & Queues
        </p>
        <p> </p>
        <p className="bold" id="intro">
          Trees and Graphs
        </p>
        <p> </p>
        <p className="bold" id="intro">
          Binary Bit(Bit Manipulation)
        </p>
        <p> </p>
        <p className="bold" id="intro">
          Math & Logic
        </p>
        <p> </p>
        <p className="bold" id="intro">
          Recursion
        </p>
        <p> </p>
        <p className="bold" id="intro">
          Dynamic Programming
        </p>
        <p> </p>
        <p className="bold" id="intro">
          Sorting & Searching
        </p>
        <p> </p>
        <p className="bold" id="intro">
          System Design
        </p>
        <p> </p>
        <p className="bold" id="intro">
          System Design
        </p>
        <p> </p>
        <p className="bold" id="intro">
          Testing
        </p>
        <p> </p>
        <p className="bold" id="intro">
          Useful Resources
        </p>
        <p> </p>
        <p className="code-box"> </p>
      </div>
    );
  }
}

export default Blog3;
