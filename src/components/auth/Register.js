import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import authService from '../../services/AuthService'

const EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const validations = {
  name: (value) => {
    let message;
    if (!value) {
      message = 'Name is required';
    }
    return message;
  }, 
 
  username: (value) => {
    let message;
    if (!value) {
      message = 'Username is required';
    }
    return message;
  },
 
  email: (value) => {
    let message;
    if (!value) {
      message = 'Email is required';
    } else if (!EMAIL_PATTERN.test(value)) {
      message = 'Invalid email pattern';
    }
    return message;
  },
  password: (value) => {
    let message;
    if (!value) {
      message = 'Password is required';
    }
    return message;
  }
  
}

export default class Register extends Component {
  state = {
    user: {
      email: '',
      password: '',
      username: '', 
      name: ''
    },
    errors: {},
    touch: {},
    isRegistered: false
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      },
      errors: {
        ...this.state.errors,
        [name]: validations[name] && validations[name](value)
      }
    })
  }

  handleBlur = (event) => {
    const { name } = event.target;
    this.setState({
      touch: {
        ...this.state.touch,
        [name]: true
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isValid()) {
      authService.register(this.state.user)
        .then(
          (user) => this.setState({ isRegistered: true }),
          (error) => {
            const { message, errors } = error.response.data;
            this.setState({
              errors: {
                ...this.state.errors,
                ...errors,
                email: !errors && message
              }
            })
          }
        )
    }
  }

  isValid = () => {
    return !Object.keys(this.state.user)
      .some(attr => this.state.errors[attr])
  }

  render() {
    const { isRegistered, errors, user, touch } =  this.state;
    if (isRegistered) {
      return (<Redirect to="/" />)
    }

    return (
      <div className="register-form">
        <h4>Sign up</h4>
            <form id="register-form" className="mt-4" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" className={`form-control ${touch.email && errors.email ? 'is-invalid' : ''}`} onChange={this.handleChange} onBlur={this.handleBlur} value={user.email} />
                <div className="invalid-feedback">{ errors.email }</div>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" className={`form-control ${touch.password && errors.password ? 'is-invalid' : ''}`} onChange={this.handleChange} onBlur={this.handleBlur} value={user.password} />
                <div className="invalid-feedback">{ errors.password }</div>
              </div>
              <div className="form-group">
                <label>Username</label>
                <input type="text" name="username" className={`form-control ${touch.username && errors.username ? 'is-invalid' : ''}`} onChange={this.handleChange} onBlur={this.handleBlur} value={user.username} />
                <div className="invalid-feedback">{ errors.username }</div>
              </div>
              {/* <p className="mb-2"><small>If you signup, you agree with all our terms and conditions where we can do whatever we want with the data!</small></p> */}
            <button className="btn btn-white" form="register-form" type="submit" disabled={!this.isValid()}> Create the Account</button>
            </form>
          </div>
      
    );
  }
}