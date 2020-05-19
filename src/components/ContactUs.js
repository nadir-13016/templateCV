import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
export default class ContactUs extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

  handleSubmit(e) {
    e.preventDefault()
    const { name, email, subject, message } = this.state
    let templateParams = {
      from_name: email,
      to_name: 'daisukeleblonx@gmail.com',
      subject: subject,
      message_html: message,
    }
    emailjs.send(
      'gmail',
      'template_6gZTJ4oN',
      templateParams,
      'user_A36dpAU6B7XJQ6rXxh5j0'
    )
    this.resetForm()
  }
  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
  render() {
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="twelve columns">
              <h2 className="lead">
              Feel free to contact me for any work or suggestions below
              </h2>
              <br/>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <label className="text-muted">Name</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
              />
              <label className="text-muted">Email address</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"
              />
              <label className="text-muted">Subject</label>
              <input
                type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject"
              />
              <label className="text-muted">Message</label>
              <textarea
                name="message"
                className="text-primary"
                placeholder="Write your message"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
              />
              <button>Send</button>
              </form>
            </div>
          </div>
          
        </section>
        );
  }
}