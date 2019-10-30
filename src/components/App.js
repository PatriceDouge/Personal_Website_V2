import React, { Component } from 'react';
import '../styles/App.css';

import Home from "./Home"
import Work from "./Work"
import Projects from "./Projects"
import Contact from "./Contact"
import Footer from "./Footer"

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Work />
        <Projects />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App;
