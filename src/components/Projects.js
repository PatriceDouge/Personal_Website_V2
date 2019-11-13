import React, { Component } from "react";
import "../styles/Projects.css";
import "../styles/App.css";

class Projects extends Component {
  render() {
    return (
      <div className="container">
        <h1>Projects</h1>
        <h2>
          Want to see more? Visit my{" "}
          <a href="https://github.com/PatriceDouge">github.</a>
        </h2>
        <div className="row projects">
          <div className="col-sm project-box">
            <img
              src={require("../assets/images/github-repo-icon.jpg")}
              alt="Repo Icon"
            />

            <a href="https://github.com/PatriceDouge/Buzz-Social-Media-App">
              Buzz-Social-Media-App
            </a>

            <br />

            <p>
              A social media app built using Angular 7, MongoDB, Express and
              Node. My role was handling setting up the backend, user
              authentication, user posting and well as styling.
            </p>

            <div className="lang">
              <span className="dot-yellow"></span>
              <p className="language">JavaScript</p>
            </div>
          </div>

          <div className="col-sm project-box padding">
            <img
              src={require("../assets/images/github-repo-icon.jpg")}
              alt="Repo Icon"
            />

            <a href="https://github.com/PatriceDouge/UREats">UREats</a>

            <br />

            <p>
              A nutrution and health planning solution for students at the
              University of Rochester. Built using React, MongoDB, Node, and
              Express. My role was setting up user authentication and handling
              the front-end and backend of the community section.
            </p>

            <div className="lang">
              <span className="dot-yellow"></span>
              <p className="language">JavaScript</p>
            </div>
          </div>
        </div>

        <div className="row projects">
          <div className="col-sm project-box">
            <img
              src={require("../assets/images/github-repo-icon.jpg")}
              alt="Repo Icon"
            />

            <a href="https://github.com/PatriceDouge/Buzz-IOS">Buzz-IOS</a>

            <br />

            <p>
              An IOS social media app built using Swift 4 and Google Firebase.
            </p>

            <div className="lang">
              <span class="dot-orange"></span>
              <p className="language">Swift</p>
            </div>
          </div>

          <div className="col-sm project-box padding">
            <img
              src={require("../assets/images/github-repo-icon.jpg")}
              alt="Repo Icon"
            />

            <a href="https://github.com/PatriceDouge/Shortest-Path">
              Shortest Path
            </a>

            <br />

            <p>
              My program reads in data with intersections and roads of a map and
              makes a map and calculates the shortest path between two
              intersections and the minimum weight spanning tree of the graph
            </p>

            <div className="lang">
              <span class="dot-brown"></span>
              <p className="language">Java</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
