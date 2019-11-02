import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import '../styles/App.css';
import '../styles/Blog2.css';

class Blog2 extends Component {
  render() {
    return (
      <div className="blog2">

        <div className="logo">
          <Link to="/"><img src={require('../assets/images/logo.jpg')} alt="logo"/></Link>
        </div>

        <h1 className="bold">Coding Interview Crash Course: The Must-Know</h1>

        <p className="date">1 November 2019</p>

        <p>In progress...</p>

        <p className="bold">Introduction</p>

        <p className="code-box">
          
        </p>

      </div>
    )

  }
}

export default Blog2;
