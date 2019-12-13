import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import "../styles/App.css";
import "../styles/Blog2.css";

class Blog2 extends Component {
  render() {
    return (
      <div className="blog2">
        <div className="logo">
          <Link to="/">
            <img src={require("../assets/images/logo.jpg")} alt="logo" />
          </Link>
        </div>
        <h1 className="bold">
          How to configure your React app to serve the production build to
          Heroku
        </h1>
        <p className="date"> 12 December 2019 </p>

        <p>
          If you use create-react-app to
          <Link to="/blog1">&nbsp;deploy&nbsp;</Link>
          to Heroku, you might run into the problem of Heroku serving your
          development files instead of the minified production files. <br />
          Not configuring your React App to do so will cause problems with your
          site taking a while to load or not loading at all. <br />
          This article will help you configure you app to do so.
        </p>

        <p className="bold">Configure you React App:</p>

        <p>
          First, we need to install{" "}
          <a href="https://www.npmjs.com/package/serve">this package</a> to
          serve our production build as a static resource. <br />
          Run the following in your project root(where your package.json is):
        </p>
        <p className="code-box">npm install --save serve</p>

        <p>Next, we need to change the scripts in package.josn:</p>
        <p className="code-box">
          "scripts": &#123; <br />
          &nbsp;"dev": "react-scripts start", <br />
          &nbsp;"start": "serve -s build", <br />
          &nbsp;"build": "react-scripts build", <br />
          &nbsp;"test": "react-scripts test --env=jsdom", <br />
          &nbsp;"eject": "react-scripts eject", <br />
          &nbsp;"heroku-postbuild": "npm run build" <br />
          &#125;
        </p>

        <p className="bold">Finished!</p>
        <p>
          Now follow the
          <Link to="/blog1">&nbsp;steps&nbsp;</Link>
          to deploy to heroku and your app will be running in production mode!
        </p>

        <p className="thanks">Thank you for reading!</p>
      </div>
    );
  }
}

export default Blog2;
