import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/Photography.css';

class Photography extends Component {
  render() {
    return (
      <div className="container">

        <div className="row">
        
          <div className="column">
            <img className="landscape" src={require('../assets/images/1.jpg')} alt=""/>
            <img className="portrait" src={require('../assets/images/2.jpg')} alt=""/>
            <img className="landscape" src={require('../assets/images/22.jpg')} alt=""/>
            <img className="portrait" src={require('../assets/images/3.jpg')} alt=""/>
            <img className="portrait" src={require('../assets/images/4.jpg')} alt=""/>
            <img className="landscape" src={require('../assets/images/5.jpg')} alt=""/>
          </div>

          <div className="column">
            <img className="portrait" src={require('../assets/images/6.jpg')} alt=""/>
            <img className="landscape" src={require('../assets/images/21.jpg')} alt=""/>
            <img className="portrait" src={require('../assets/images/7.jpg')} alt=""/>
            <img className="landscape" src={require('../assets/images/18.jpg')} alt=""/>
            <img className="portrait" src={require('../assets/images/8.jpg')} alt=""/>
            <img className="portrait" src={require('../assets/images/9.jpg')} alt=""/>
          </div>

          <div className="column">
          <img className="landscape" src={require('../assets/images/20.jpg')} alt=""/>
            <img className="portrait" src={require('../assets/images/10.jpg')} alt=""/>
            <img className="portrait" src={require('../assets/images/11.jpg')} alt=""/>
            <img className="landscape" src={require('../assets/images/12.jpg')} alt=""/>
            <img className="portrait" src={require('../assets/images/13.jpg')} alt=""/>
          </div>

          <div className="column">
            <img className="landscape" src={require('../assets/images/14.jpg')} alt=""/>
            <img className="portrait" src={require('../assets/images/15.jpg')} alt=""/>
            <img className="landscape" src={require('../assets/images/19.jpg')} alt=""/>
            <img className="portrait" src={require('../assets/images/16.jpg')} alt=""/>
            <img className="portrait" src={require('../assets/images/17.jpg')} alt=""/>
          </div>

        </div>

      </div>
    )

  }
}

export default Photography;
