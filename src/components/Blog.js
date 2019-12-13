import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import "../styles/App.css";
import "../styles/Blog.css";

class Blog extends Component {
  render() {
    return (
      <div className="blog">
        <div className="logo">
          <Link to="/">
            <img src={require("../assets/images/logo.jpg")} alt="logo" />
          </Link>
        </div>

        <div className="content">
          <Link className="blog-link" to="/blog1">
            <div className="blogs">
              <p className="date"> 30 October 2019 </p>
              <p className="blog-title">
                How to deploy a React Application to Production using Heroku
              </p>
            </div>
          </Link>
          <Link className="blog-link not-first" to="/blog2">
            <div className="blogs">
              <p className="date"> 12 December 2019 </p>
              <p className="blog-title">
                How to configure your React app to serve the production build to
                Heroku
              </p>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Blog;
