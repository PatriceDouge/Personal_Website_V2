import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/Blog.css';

class Blog extends Component {
  render() {
    return (
      <div className="container">

        <div className="title">
          <hr className="hr-text" data-content="Patrice Dougé"/>
        </div>

        <div className="content">

          <div className="blog1">
          <h4>21 June 2018</h4>
          <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

        </div>

      </div>
    )

  }
}

export default Blog;
