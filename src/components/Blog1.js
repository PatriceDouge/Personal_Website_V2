import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import '../styles/App.css';
import '../styles/Blog1.css';

class Blog1 extends Component {
  render() {
    return (
      <div className="blog1">

        <div className="logo">
          <Link to="/"><img src={require('../assets/images/logo.jpg')} alt="logo"/></Link>
        </div>

        <h1 className="step">How to deploy a React Application to Production using Heroku</h1>

        <p className="date">30 October 2019</p>

        <p>This article will help show you how to take your React development build to production and host it using Heroku.</p>

        <p><a href="https://reactjs.org/docs/getting-started.html">Facebook</a> does a great job in showing you how to get started using <a href="https://reactjs.org/docs/create-a-new-react-app.html#create-react-app">create-react-app</a>, but deploying to production can sometimes get confusing, as there are many steps to take to assure the build works properly with Heroku</p>

        <p>Let's now look at the process of correctly deploying your React app to heroku.</p>

        <p className="step">Step 1:</p>

        <p>First, create your React app if you haven't already done so:</p>

        <p className="code-box">$ create-react-app YourAppName</p>

      </div>
    )

  }
}

export default Blog1;
