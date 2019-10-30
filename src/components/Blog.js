import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import '../styles/App.css';
import '../styles/Blog.css';

class Blog extends Component {
  render() {
    return (
      <div className="blog">

        <div className="logo">
          <Link to="/"><img src={require('../assets/images/logo.jpg')} alt="logo"/></Link>
        </div>

        <div className="content">

          <div className="blogs">
            <p className="date">21 June 2018</p>
            <p className="blog-title">How to deploy a React Application to Production using Heroku</p>
          </div>

        </div>

      </div>
    )

  }
}

export default Blog;
