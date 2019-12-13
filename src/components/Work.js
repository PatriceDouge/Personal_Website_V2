import React, { Component } from "react";
import "../styles/Work.css";
import "../styles/App.css";

class Work extends Component {
  render() {
    return (
      <div className="container">
        <div className="work">
          <h1> MY RECENT WORK </h1>
          <div className="row gutter">
            <div className="col text">
              <h3> Personal Website V1 </h3>
              <p>
                This was the first iteration of my personal site.To build it, I
                used HTML, JS, JavaScript and jQuery.
              </p>
              <div className="work-btn">
                <a href="https://patricedouge.github.io/">
                  <button type="button"> View Website </button>
                </a>
              </div>
            </div>
            <div className="col img">
              {/* <img src="http://s3.amazonaws.com/patrice-douge-assets/images/personal_site_v1.jpg" alt="personal site v1 img"/> */}
              <img
                src={require("../assets/images/personal_site_v1.jpg")}
                alt="personal site v1 img"
              />
            </div>
          </div>
          <hr />
          <div className="row gutter">
            <div className="col img">
              {/* <img src="http://s3.amazonaws.com/patrice-douge-assets/images/igh-site.jpg" alt="igh img"/> */}
              <img
                src={require("../assets/images/igh-site.jpg")}
                alt="personal site v1 img"
              />
            </div>
            <div className="col text">
              <h3> Rochester Regional Health </h3>
              <p>
                Given a design, I developed this website for the IGH School of
                Nursing using HTML, CSS, and JS.
              </p>
              <div className="work-btn">
                <a href="https://www.rochesterregional.org/medical-education/training-programs/igh-school-of-practical-nursing">
                  <button type="button"> View Website </button>
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className="row gutter">
            <div className="col text">
              <h3> Amexsa Corp </h3>
              <p>
                Amexsa is an international trading company which specializes in
                the marketing and distribution of food and beverages worldwide.I
                helped with the design and development of their website, using
                HTML, CSS and JavaScript
              </p>
            </div>
            <div className="col img">
              {/* <img src="http://s3.amazonaws.com/patrice-douge-assets/images/amexsa.jpg" alt="amexsa img"/> */}
              <img
                src={require("../assets/images/amexsa.jpg")}
                alt="personal site v1 img"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
