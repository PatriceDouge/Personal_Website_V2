import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import App from './components/App';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import Work from './components/Work';
import Photography from './components/Photography';


import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      <Route path="/footer" component={Footer} />
      <Route path="/home" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/work" component={Work} />
      <Route path="/photography" component={Photography} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
