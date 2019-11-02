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

        <p>This article will </p>

        <p>Let's now look at the process of correctly deploying your React app to Heroku.</p>

        <p className="bold">Introduction</p>

        <p>Install create-react-app and create your app, then navigate into the project folder:</p>

        <p className="code-box">
          $ npm install -g create-react-app
          <br/>
          $ create-react-app YourAppName
          <br/>
          $ cd YourAppName
        </p>

      </div>
    )

  }
}

export default Blog2;
