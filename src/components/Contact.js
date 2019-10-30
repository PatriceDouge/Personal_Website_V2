import React, { Component } from 'react';
import '../styles/Contact.css';
import '../styles/App.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Message submitted');
    event.preventDefault();
  }

  render() {
    return (
      <div className="form">

        <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form>
              <h1>Contact Me</h1>
              <p className="h5 text-center mb-4">Feel free to contact me if you would like to work with me!</p>
              <div className="grey-text">
                <MDBInput
                  label="Your name"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Subject"
                  icon="tag"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  type="textarea"
                  rows="2"
                  label="Your message"
                  icon="pencil-alt"
                />
              </div>
              <div className="contact-btn">
                <a href="">
                  <button type="button">Contact Me</button>
                </a>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      </div>
    )
  }
}

export default Contact;
