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

        <p>Let's now look at the process of correctly deploying your React app to Heroku.</p>

        <p className="step">Step 1: Create your React project</p>

        <p>Install create-react-app and create your app, then navigate into the project folder:</p>

        <p className="code-box">
          $ npm install -g create-react-app
          <br/>
          $ create-react-app YourAppName
          <br/>
          $ cd YourAppName
        </p>

        <p className="step">Step 2: static.json</p>

        <p>Now, create a static.json file in the root of your project directory:</p>

        <p className="code-box">$ touch static.json</p>

        <p>Paste the following code into the file:</p>

        <p className="code-box">
          &#123;<br/>
          &nbsp;"root": "build/",<br/>
          &nbsp;"clean_urls": false,<br/>
          &nbsp;"routes": &#123;<br/>
          &nbsp;"/**": "index.html"<br/>
          &nbsp; &#125;<br/>
          &#125;
        </p>
        
        <p className="step">Step 3: Git</p>

        <p>Now, initialize a git repository in the folder:</p>

        <p className="code-box">$ git init</p>

        <p className="step">Step 4: Deploy to Heroku</p>

        <p>If you haven't already, sign up on <a href="https://signup.heroku.com/">Heroku</a> and <a href="https://devcenter.heroku.com/articles/heroku-cli">download</a> the Heroku CLI</p>

        <p>Login to Heroku CLI:</p>

        <p className="code-box">$ heroku login</p>

        <p>If you haven't already created your app in Heroku, do the following:</p>
        <p className="code-box">
          $ heroku create Your-App --buildpack https://github.com/mars/create-react-app-buildpack.git <br/>
          $ git add . <br/>
          $ git commit -m "Created my React App" <br/>
          git push heroku master <br/>
          heroku open <br/>
        </p>

        <p>For an existing Heroku app:</p>
        <p className="code-box">
          $ heroku git:remote --app Your-App><br/>
          $ heroku buildpacks:set https://github.com/mars/create-react-app-buildpack.git<br/>
          $ git add . <br/>
          $ git commit -m "Created my React App" <br/>
          $ git push heroku master <br/>
        </p>

        <p className="step">Finished!</p>

        <p>You can now open your deployed app using:</p>
        <p className="code-box">$ heroku open</p>

        <p className="thanks">Thank you for reading!</p>

      </div>
    )

  }
}

export default Blog1;
